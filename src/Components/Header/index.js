import React from 'react'
import headerimg from './header.png';
import '../allcomponentindex.css';

class RangePlot extends React.Component{
  state={
    slots: 2,
    start: -10,
    end: 10,
    labelMode: "mid",
  }

 

    render () {
        let scale=[];
        let slider=[];
        let currentScale=[];
        let minThumb= null;
        let maxThumb=null;
        let numbSlots=(this.state.end-this.state.state)/this.state.slots;

        for(let i=this.state.start;i<=this.state.end;i++){
          let label="";
          if((i%this.state.slots)===0){
            label=i;
          }
          scale.push(
            <div key={i} className="slotScale">
              <div className="horizontal">
              <div className="horizontal">
             <div className="horizontal">
              {label}</div><div className="horizontal1"><hr/></div>
                </div>   
              
               </div>
            

            </div>
          );
          let currentLabel="";
          if(i===this.state.start|| i===this.state.end){
            currentLabel=i;
          }
          currentScale.push(
            <div key={i} className="slotScaleSelected">{currentLabel}</div>
          )
          if(i===this.state.start){
            minThumb = <this.minSlider />
          } else if(i=== this.state.end){
            maxThumb = <this.MaxSlider />
          } else {
            minThumb=null;
            maxThumb=null;
          }
          let lineClass = "line";
          if(i>=this.state.start && i<this.state.end){
            lineClass+=" line-selected";
          }
         
          


        }

      return(
      <div className="maincontent">
      <div>
        Risk Indicator: 
      </div>
      <div className="rendercontent">
        <div className="sliderContainer">

          <div className="sliderScale">
            {scale}
          </div>
          <div className="sliderSelectedScale">
            {currentScale}
          </div>
        </div>
        </div>
      </div>
      );
    }

}



function Header () {
    return(
      <div className="RangeMain">
        


      </div>  
    );

}

export default RangePlot;
