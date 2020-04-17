import React, {Component} from 'react';
import '../allcomponentindex.css';

class CustomerAPI extends Component{

    state={
        cust:[]
    }
    componentDidMount(){
        fetch('http://196.121.230.1:8080/customers')
        .then(res=>res.json())
        .then((data)=>{
            this.setState({cust:data})
        })
        .catch(console.log)
    }
    render()
{
    return(
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

    )
}

}

export default CustomerAPI;