import React from 'react';
import '../allcomponentindex.css';


class Range extends React.Component{



render(){
    return(
        
        <div className="rangediv">
            {console.log(this.props.rangeval)}
            
            {this.props.rangeval==="HR" &&
            <div className="hrdiv" style={{border:`groove`}}>HR</div>
            }
            {this.props.rangeval!="HR" &&
            <div className="hrdiv">HR</div>}

{this.props.rangeval==="MR" &&
            <div className="mrdiv" style={{border:`groove`}}>MR</div>
            }
            {this.props.rangeval!="MR" &&
            <div className="mrdiv">MR</div>}

{this.props.rangeval==="LR" &&
            <div className="lrdiv" style={{border:`groove`}}>LR</div>
            }
            {this.props.rangeval!="LR" &&
            <div className="lrdiv">LR</div>}

{this.props.rangeval==="B" &&
            <div className="bdiv" style={{border:`groove`}}>B</div>
            }
            {this.props.rangeval!="B" &&
            <div className="bdiv">B</div>}

{this.props.rangeval==="MB" &&
            <div className="mbdiv" style={{border:`groove`}}>MB</div>
            }
            {this.props.rangeval!="MB" &&
            <div className="mbdiv">MB</div>}

{this.props.rangeval==="HB" &&
            <div className="hbdiv" style={{border:`groove`}}>HB</div>
            }
            {this.props.rangeval!="HB" &&
            <div className="hbdiv">HB</div>}

        </div>
    );
}
}

export default Range;