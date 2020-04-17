import React, {Component} from 'react';
import '../allcomponentindex.css';

class CustomeraddrAPI extends Component{

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
        <div className="addapidiv">
        <div className="content"><b>Address: </b>{this.state.cust.address}</div>
            <div className="content"><b>City: </b>{this.state.cust.city}</div>
            <div className="content"><b>Country: </b>{this.state.cust.country}</div>    
     </div>

    )
}

}

export default CustomeraddrAPI;