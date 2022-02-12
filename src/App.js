import React from "react";
import Data from './Data.js'
import Comp from './Comp.js';
import './App.css';
import jeremy from './images/image-jeremy.png';


function App() {
  return (
    <div className="div">

    <div> <div className="shadow1">
<p className="p1">Daily</p>
 <p className="p2">Weekly</p>
  <p className="p3">Monthly</p> </div>
<div className="div1">
<img src={jeremy} className="jeremy"  />
                  <h5>Report for </h5> 
                    <h1>Jeremy
                        Robson
                    </h1> </div></div> 

    <div className="menuList">                
     {Data.map((Itm)=> {
        return(
            <Comp  image={Itm.image} name={Itm.name}
            
            time={Itm.time} last={Itm.last} color={Itm.color}/>

        );

         } )} </div>

      </div> 
      
     

 
  );}

export default App


/*function Design(){
  return(
<div className="div"> 


<div className="shadow1">
<p className="p1">Daily</p>
 <p className="p2">Weekly</p>
  <p className="p3">Monthly</p> </div>
<div className="div1">
<img src={jeremy} className="jeremy"  />
                  <h5>Report for </h5> 
                    <h1>Jeremy
                        Robson
                    </h1> </div>


<div className="shadow2">
<img src={work} className="work"  /></div>
<div className="div2">
<img src={dots} className="dots"  />
  <h5>Work</h5>
  <h1>32hrs</h1>
  <h6>Last Week-36hrs</h6></div>


<div className="shadow3">
<img src={exercise} className="exercise"  />
</div>
<div className="div3">
<img src={dots} className="dots"  />
<h5>Exercise</h5>
  <h1>4hrs</h1>
  <h6>Last Week-5hrs</h6>
</div>


<div className="shadow4">
<img src={play} className="play"  />
</div>
<div className="div4">
<img src={dots} className="dots"  />
<h5>Play</h5>
  <h1>10hrs</h1>
  <h6>Last Week-8hrs</h6>
</div>


<div className="shadow5">
<img src={social} className="social"  />
</div>
<div className="div5">
<img src={dots} className="dots"  />
<h5>Social</h5>
  <h1>5hrs</h1>
  <h6>Last Week-10hrs</h6>
</div>

<div className="shadow6">
<img src={study} className="study"  />
</div>
<div className="div6">
<img src={dots} className="dots"  />
<h5>Study</h5>
  <h1>4hrs</h1>
  <h6>Last Week-7hrs</h6>
</div>

<div className="shadow7">
<img src={selfcare} className="selfcare"  />
</div>
<div className="div7">
<img src={dots} className="dots"  />
<h5>Self Care</h5>
  <h1>2hrs</h1>
  <h6>Last Week-2hrs</h6>
</div>


</div>



  )

}

export default Design*/










