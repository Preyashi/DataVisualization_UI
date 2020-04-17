import React from 'react';
import '../allcomponentindex.css';

class HistogramAcc extends React.Component{
    state={
        Hist:[
            {
                month:"jan",
                bal:"20"
            },
            {
                month:"feb",
                bal:"40"
            },
            {
                month:"march",
                bal:"45"
            },
            {
                month: "april",
                bal:"59"
            },
            {
                month: "may",
                bal:"79"
            },
            {
                month: "june",
                bal:"68"
            },
            {
                month: "july",
                bal:"73"
            },
            {
                month: "august",
                bal:"70"
            },
            {
                month: "september",
                bal:"86"
            }
        ]
    }

    
    render(props){
        
        const Line=({left}) =>{
                return(
                    <div className="line" style={{left:`${left}%`}}>
                </div>
                )
        }

        const Numbers=({left}) =>{
            return(
                <div className="linenum" style={{left:`${left}%`}}>
                    {left*10}
                </div>
            )
        }

        const Bar =({percent})=>{
            return(
                <div className="bar2" style={{width:`${percent/10}%`}} />
            )
        }
        const BarTextContent=({history})=>{
            
            return(
                <div className="bartextcontent">
                   { history.map((month)=>(
                        <div className="text">
                            {month.month}
                        </div>
                    ))
                   }
                </div>
            )
        }
        const renderLines=()=>{
            return Array(11).fill(null).map((el,i)=>(
                <div className="lineswdnumdiv">
            <Line left={i*10} key={i} ></Line>
            <Numbers left={i*10} key={i}></Numbers>
            </div>
            ))
        }
        const renderNars=()=>{
            return(
                
                <div></div>
            )
        }
        const Markers = () => {
            const markerArr = Array(11).fill(null);
            
            return (
              <div className="markers">
                {
                  markerArr.map((el, i) => (
                   <div className="marker" style={{ left: `${i*10}%` }}>
                    { i * 10 }
                   </div>
                  ))
                }
              </div>
            )
          }

        

        return(
           
                <div className="graph">
                    
                   <BarTextContent history={this.state.Hist}/>
                   <div className="graphfirst">
                    <div className="barLinesContainer">
                    {renderLines()}
                    <Bar percent={200} />
                    <Bar percent={384} />
                    <Bar percent={571} />
                    <Bar percent={454} />
                    <Bar percent={542}/>
                    <Bar percent={658}/>
                    <Bar percent={784} />
                    <Bar percent={625}/>
                    <Bar percent={510}/>
                    </div>
                    
                    </div>
                    
                </div>

           
        )
    }

}

export default HistogramAcc;