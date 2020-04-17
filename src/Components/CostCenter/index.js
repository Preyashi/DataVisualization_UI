import React, { useState } from 'react';
import '../allcomponentindex.css';
import headerimg from '../Header/header.png';
import Range from '../Range/index';
import HistogramAcc from '../HistogramAcc/index';
import HistogramBalCS from '../HistogramBalCS/index';




function hover(e) {
    e.target.style.background='darkcyan';
}
function hoverout(e){
    e.target.style.background='none';
}

const CostCenter = (props)=> {
    var [selected,setselected] = useState("riskIndicator");
    const accountinfoset=[
        {accId:1234273637,accCompCode:999,accNum:123,type:"Savings",bal:1532,currencycode:"$"},
        {accId:7454367373,accCompCode:989,accNum:125,type:"Checkings",bal:19827,currencycode:"$"}
    ];

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
        selected =props.location.state;
        console.log("after");
        console.log(selected);
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
                       <div> <b>Cost Center Number: </b> 254<br/> </div>
                       <div><b>Total Customers: </b>20548</div>
                       <div><b>Total Accounts: </b>98550</div>
                       
                    </div>
                    
                </div>
                <div className="ContentRow">
                <div className="SideMenu" >
              
                        <ul className="sideMenuList" >
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>setselected("riskIndicator")}>Risk Indicator</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>setselected("balhistorical")}>Balance History</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>setselected("accsummary")}>Accounts Summary</li>
                            <li className="ListTabs" onMouseEnter={hover} onMouseLeave={hoverout} onClick={()=>setselected("custsummary")}>Customer Summary</li>
                            
                        </ul>
                       
           
                    </div>
                    <div className="ContentDetails">
                    
                    {selected==="riskIndicator" &&
                         <div className="contentrisk"><div className="labeldiv"><b>Risk Indicator: </b></div><div className="rangemaindiv"><Range value={1}/></div></div>
                    }
                    {selected==="balhistorical" &&
                        
                        <div className="histogramcontent">
                            <div>
                                <b>Total Balance</b><br />
                                <b>Mean Balance: </b>69165.8$<br />
                                <b>Max Balance: </b>98547$
                            
                            </div>
                        <HistogramBalCS />
                        </div>
                    }
                    
                    {
                        selected==="accountsInfo" &&
                        <div className="accountsInfodiv">
                            <ol className="accountsList">
                                {accountinfoset.map((el,i)=>(
                                    <li className="account" key={i}>
                                    {AccountDetailsInfo(el)}
                                </li>
                                ))}
                            </ol>
                            </div>
                    }
                    {
                        selected==="accsummary" &&
                        <div className="histogramcontent">
                            <div>
                                <b>Total Accounts</b><br />
                                <b>Mean Accounts: </b>485<br />
                                <b>Max Accounts: </b>784
                            
                            </div>
                        <HistogramAcc />
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

export default CostCenter;
