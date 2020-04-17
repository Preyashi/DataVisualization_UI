import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Header from './Header/index';
import Footer from './Footer/index';
import './allcomponentindex.css';
import headerimg from './Header/header.png';
import Range from './Range/index';
import Histogram from './Histogram/index';
import CreditLimit from './CreditLimit/index';
import HeatMap from './HeatMap/index';


class Components extends React.Component{

    state={
        cust:[],
        acc:[],
        transhist:[],
        creditlimitapidata:[],
        selected:"address",
        
    }
     
     

    componentDidMount(){
        fetch('http://196.121.230.1:8080/customers')
        .then(res=>res.json())
        .then((data)=>{
            this.setState({cust:data})
        })
        .catch(console.log)
       
        fetch('http://196.121.230.1:8080/accounts/0/transHist')
        .then(trans=>trans.json())
        .then((datatrans)=>{
            this.setState({transhist:datatrans})
        })
        fetch('http://196.121.230.1:8080/accounts/0/creditLimitUtil')
        .then(creditapi=>creditapi.json())
        .then((creditdata)=>{
            this.setState({creditlimitapidata:creditdata})
        })
    }

render(props){

  const hover = (e) => {
    e.target.style.background='darkcyan';
}
 const hoverout=(e) =>{
    e.target.style.background='none';
}
 
    function AccountDetailsInfo(accval) {
        return(
            <div className="accountdiv">
        <div className="accountLabelID"><b>Account Id:</b> {accval.accountId}</div>
        <div className="accountLabel"><b>Account Company Code:</b> {accval.accountCompCode}</div>
        <div className="accountLabel"><b>Account Number:</b> {accval.accountNum}</div>
        <div className="accountLabel"><b>Account Type:</b> {accval.type}</div>
        <div className="accountLabel"><b>Balance:</b>{accval.balance} {accval.currency}</div>
        <div className="accountLabelLink">
            <button className="accountLink" key={"details"} onClick={()=>redirectToTarget()}>Details</button>
            <button className="accountLink" key={"acctActivitySummary"} onClick={()=>redirectAccntActivitySummary()}>Account Activity Summary</button>
            </div>        
                                    </div>
        );
    }

    function redirectToTarget() {
        props.history.push('/accounts');
      }

    function redirectAccntActivitySummary(){
        props.history.push("/accounts","accactsummary");
    }

    if(props && props.location.state){
        console.log("state is");
        console.log(props.location.state);
        this.state.selected =props.location.state;
        console.log("after");
        console.log(this.state.selected);
        props.location.state = null;
    }

    return(
        
        <div className="DisplayMain">
          
           <div className="HeaderDiv">
           <img className="headerImage" src={headerimg} alt="Wells Fargo Logo"/>
        </div>
            <div className="ContentDiv">
            <div className="TopRow">
        <div className="IdDiv">
        <div> <b>Customer Number:</b> {this.state.cust.custNum}<br/> </div>
        <div><b> Custmer Id: </b>{this.state.cust.custId}</div>
     <div><b>Customer Tie Breaker: </b>{this.state.cust.custTieBrkr}</div>
        
     </div>
     <div className="BasicDetails">
     <div><b>Name:</b>{this.state.cust.firstName}&nbsp;{this.state.cust.lastName}</div>
     <div><b>DOB:</b>{this.state.cust.dob}</div>
     </div>
     </div>
    <div className="ContentRow">
                <div className="SideMenu" >
              
                        <ul className="sideMenuList" >
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"address"})}>Address Details</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"accountsInfo"})}>Accounts Information</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"riskIndicator"})}>Risk Indicator</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"historical"})}>Transition History</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"creditutilization"})}>Credit Limit Utilization</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"accountdetails"})}>Account History Details</li>
                        </ul>
                       
           
                    </div>
                    <div className="ContentDetails">
                    {this.state.selected==="address" && 
                    <div className="addapidiv">
                    <div className="content"><b>Address: </b>{this.state.cust.address}</div>
                        <div className="content"><b>City: </b>{this.state.cust.city}</div>
                        <div className="content"><b>Country: </b>{this.state.cust.country}</div>    
                 </div>          
                    }
                    {this.state.selected==="riskIndicator" &&
                         <div className="contentrisk"><div className="labeldiv"><b>Risk Indicator: </b></div><div className="rangemaindiv"><Range rangeval={this.state.cust.riskIndicator}/></div></div>
                    }
                    {this.state.selected==="historical" &&
                        <div className="histogramcontent">
                             <p><b>Transition History </b>(Scale in 1 Transition/month)</p>
                        <Histogram hist={this.state.transhist} valhist={"trans"}/>
                        </div>
                    }
                    {this.state.selected==="creditutilization" &&
                        <div className="creditlimit">
                            <p><b>Credit Limit Utilization </b>(Scale in 100$)</p>
                            <Histogram hist={this.state.creditlimitapidata} valhist={"credit"} />
                            
                            </div>

                    }
                    {
                        this.state.selected==="accountdetails" &&
                        <div className="accountdetailsdiv">                   
                            <HeatMap />
                            </div>
                    }
                    {
                        this.state.selected==="accountsInfo" &&
                        <div className="accountsInfodiv">
                            <ol className="accountsList">
                                {this.state.cust.relatedAccounts.map((el,i)=>(
                                    <li className="account" key={i}>
                                    {AccountDetailsInfo(el)}
                                </li>
                                ))}
                                
                                
                            </ol>
                           
                            </div>
                            
                    }
                   
                     </div>
                </div>
               
            </div>
            <div className="FooterDiv">
            <b><h1>Internal Website</h1></b><h5> All copyrights reserved.</h5>
        </div>
        </div>

    );


    }
}

export default Components;
