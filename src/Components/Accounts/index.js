import React, { useState } from 'react';
import headerimg from '../Header/header.png';
import Histogram from '../Histogram/index';


class AccountComponent extends React.Component{

    state={
        acc:[],
        selected:"address",
    accountinfoset:[
        {accId:1234273637,accCompCode:999,accNum:123,type:"Loan",bal:547800,currencycode:"$"},
        {accId:6353783938,accCompCode:999,accNum:123,type:"Overdraft",bal:12,currencycode:"$"},
    ],
    customerinfoset:[
        {custId:65342252,custNum:121,custTieBrkr:2,fname:"John",lname:"Doe"},
         ]
    }

    componentDidMount(){
        fetch('http://196.121.230.1:8080/accounts')
        .then(res=>res.json())
        .then((data)=>{
            this.setState({acc:data})
        })
        .catch(console.log)
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
        <div className="accountLabelID"><b>Account Id:</b> {accval.accId}</div>
        <div className="accountLabel"><b>Account Company Code:</b> {accval.accCompCode}</div>
        <div className="accountLabel"><b>Account Number:</b> {accval.accNum}</div>
        <div className="accountLabel"><b>Account Type:</b> {accval.type}</div>
        <div className="accountLabel"><b>Balance:</b>{accval.bal}{accval.currencycode}</div>
        <div className="accountLabelLink">
            <button className="accountLink" key={"details"} onClick={()=>redirectToTarget()}>Details</button>
            </div>        
                                    </div>
        );
    }

    function CustomerDetailsInfo(custval) {
        return(
            <div className="customerdiv">
        <div className="customerLabelID"><b>Customer Id:</b> {custval.custId}</div>
        <div className="customerLabel"><b>Customer Number:</b> {custval.custNum}</div>
        <div className="customerLabel"><b>Customer Tie Breker:</b> {custval.custTieBrkr}</div>
        <div className="customerLabel"><b>Customer First Name</b> {custval.fname}</div>
        <div className="customerLabel"><b>Customer Last Name:</b>{custval.lname}{custval.currencycode}</div>
        <div className="customerLabelLink">
            <button className="customerLink" key={"details"} onClick={()=>CustredirectToTarget()}>Details</button>
            <button className="customerLink" key={"Indicators"} onClick={()=>CustredirectIndicator()}>View Associated Indicators</button>
            </div>        
                                    </div>
        );
    }

    function redirectToTarget() {
        props.history.push('/accounts');
      }

      function CustredirectToTarget(){
          props.history.push("/customers","address");
      }

      function CustredirectIndicator(){
          props.history.push("/customers","riskIndicator");
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
                       <div> <b>Account Id:</b> {this.state.acc.accId}<br/> </div>
    <div><b>Account Company Code: </b>{this.state.acc.accCompCode}</div>
                       <div><b>Account Number: </b>{this.state.acc.accNum}</div>
                       
                    </div>
                    <div className="BasicDetails">
                        <div><b>Account Type:</b>{this.state.acc.type}</div>
    <div><b>Balance:</b>{this.state.acc.bal}{this.state.acc.currencycode==="USD" && <div>"$"</div>}</div>
                    </div>
                </div>
                <div className="ContentRow">
                <div className="SideMenu" >
              
                        <ul className="sideMenuList" >
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"address"})}>Account Address</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"relatedAccounts"})}>Related Accounts</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"relatedCustomers"})}>Related Customers</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>this.setState({selected:"accactsummary"})}>Account Activity</li> 
                        </ul>
                       
           
                    </div>
                    <div className="ContentDetails">
                    {
                        this.state.selected==="address" &&
                    <div>
                        <div className="content"><b>Address: </b>B12/542 Charle's Street</div>
                        <div className="content"><b>City: </b>New York</div>
                        <div className="content"><b>Country: </b>US</div>    
                        </div>            
                        }
               
                
                {
                        this.state.selected==="relatedAccounts" &&
                        <div className="accountsInfodiv">
                            <ol className="accountsList">
                                {this.state.accountinfoset.map((el,i)=>(
                                    <li className="account" key={i}>
                                    {AccountDetailsInfo(el)}
                                </li>
                                ))}
                                
                                
                            </ol>
                           
                            </div>
                            
                    }
                    {this.state.selected==="relatedCustomers" &&

                    <div className="relCustInfodiv">
                    <ol className="relCustList">
                        {this.state.customerinfoset.map((el,i)=>(
                            <li className="customer" key={i}>
                            {CustomerDetailsInfo(el)}
                        </li>
                        ))}
                        
    
                    </ol>
                        </div>
                    }
                    {this.state.selected==="accactsummary" &&
                   <div className="histogramcontent">
                        <div><h2>Balance Information</h2></div>
                   <Histogram />
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

export default AccountComponent;
