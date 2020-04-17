import React, { useState }  from 'react';
import './style.css';

class HeatMap extends React.Component {
    
    render(){
   
    return(
        <div className="heatmapmain">
            <div className="heatmapdiv">

            <div className="row">
                    <div className="name">Balance:</div>
                    <div className="col0">Savings1</div>
                    <div className="col0">Savings2</div>
                    <div className="col0">Checkings1</div>
                    <div className="col0">FDR1</div>
                    <div className="col0">FDR2</div>
                </div>

                <div className="row">
                    <div className="name">Jan</div>
                    <div className="col1">1$</div>
                    <div className="col2">15$</div>
                    <div className="col3">29$</div>
                    <div className="col4">69$</div>
                    <div className="col5">89$</div>
                </div>
                <div className="row">
                    <div className="name">Feb</div>
                    <div className="col5">98$</div>
                    <div className="col3">39$</div>
                    <div className="col1">6$</div>
                    <div className="col1">3$</div>
                    <div className="col2">18$</div>
                </div>
                <div className="row">
                    <div className="name">March</div>
                    <div className="col3">8$</div>
                    <div className="col5">99$</div>
                    <div className="col5">85$</div>
                    <div className="col1">9$</div>
                    <div className="col2">17$</div>
                </div>
                <div className="row">
                    <div className="name">April</div>
                    <div className="col1">1$</div>
                    <div className="col5">83$</div>
                    <div className="col2">35$</div>
                    <div className="col2">23$</div>
                    <div className="col1">5$</div>
                </div>
            </div>
        </div>
    );
    }

}

export default HeatMap;