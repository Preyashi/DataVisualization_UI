import React from 'react';

class CreditLimit extends React.Component{
    state={
        Credit:[
            {
                month:"jan",
                bal:"20"
            },
            {
                month:"feb",
                bal:"14"
            },
            {
                month:"march",
                bal:"22"
            },
            {
                month: "april",
                bal:"8"
            },
            {
                month: "may",
                bal:"14"
            },
            {
                month: "june",
                bal:"25"
            },
            {
                month: "july",
                bal:"30"
            },
            {
                month: "august",
                bal:"28"
            },
            {
                month: "september",
                bal:"21"
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
                    {left}
                </div>
            )
        }

        const Bar =({percent})=>{
            return(
                <div className="bar1" style={{width:`${percent}%`}} />
            )
        }
        const BarTextContent=({Creditory})=>{
            
            return(
                <div className="bartextcontent">
                   { Creditory.map((month)=>(
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
                    
                   <BarTextContent Creditory={this.state.Credit}/>
                   <div className="graphfirst">
                    <div className="barLinesContainer">
                    {renderLines()}
                    <Bar percent={20} />
                    <Bar percent={14} />
                    <Bar percent={22} />
                    <Bar percent={8} />
                    <Bar percent={14}/>
                    <Bar percent={25}/>
                    <Bar percent={30} />
                    <Bar percent={28}/>
                    <Bar percent={21}/>
                    </div>
                    
                    </div>
                    
                </div>

           
        )
    }

}

export default CreditLimit;