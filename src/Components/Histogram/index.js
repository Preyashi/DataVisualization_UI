import React from 'react';
import '../allcomponentindex.css'

class Histogram extends React.Component{

    state={
        numMonths:0,
        rangeVal:0
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

        const Bar =({element,bartype})=>{
            return(
                <div className="bardivinsie">
                {bartype==="trans" &&
                <div className="bar" style={{width:`${element.transNum}%`}} />
            }
            {bartype==="credit" &&
            <div className="bar" style={{width:`${element.utilizationAmount/100}%`}} />
        }
        </div>
            )
        }

        

        const BarTextContent=({history,bartype})=>{
            
            return(
                <div className="bartextcontentdiv">
                    {bartype==="trans" &&
                        <div className="bartextcontent">
                        { history.map((month,i)=>(
                        <div className="text">
                            {
                            {
                                '1': <div>January</div>,
                                '2': <div>February</div>,
                                '3': <div>March</div>,
                                '4': <div>April</div>,
                                '5': <div>May</div>,
                                '6': <div>June</div>,
                                '7': <div>July</div>,
                                '8': <div>August</div>,
                                '9': <div>September</div>
                                
                            }[month.transMonth]
                            }
                        </div>
                        ))}
                        </div>
                    }
                    {bartype==="credit" &&
                        <div className="bartextcontent">
                        { history.map((month,i)=>(
                        <div className="text">
                            {
                            {
                                '1': <div>January</div>,
                                '2': <div>February</div>,
                                '3': <div>March</div>,
                                '4': <div>April</div>,
                                '5': <div>May</div>,
                                '6': <div>June</div>,
                                '7': <div>July</div>,
                                '8': <div>August</div>,
                                '9': <div>September</div>
                                
                            }[month.creditMonth]
                            }
                        </div>
                        ))}
                        </div>
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
       
        

        return(
           
                <div className="graph">
                   <BarTextContent history={this.props.hist} bartype={this.props.valhist}  />
                   <div className="graphfirst">
                    <div className="barLinesContainer">
                    {renderLines()}
                    {this.props.hist.map((el,i)=>(
                                     <Bar element={el} bartype={this.props.valhist} />
                                ))}
                    </div>
                    
                    </div>
                    
                </div>

           
        )
    }

}

export default Histogram;