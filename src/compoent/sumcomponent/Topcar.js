import React from 'react';
import "./Topcar.css"
import Fade from 'react-reveal/Fade';

function Topcar (){
return(
<>
<div class="wrapper">

        <div class="head">
          <Fade bottom>
            <h1 class="model">Model S</h1>
            <p class="plaid">Plaid</p>
            </Fade>
        </div>
       
<div class="text">
<Fade bottom>
   <div class="span1">
    <span class="span">396mi</span>
    <p>Range (EPA est)</p>
   </div>
  <div class="span2">
    <span class="span">1.99s</span>
    <p>0-60 mph</p> 
  </div>
   <div class="span3">
    <span class="span">200mph</span>
    <p>Top speed</p>
   </div>
   <div class="span4">
    <span class=" span">1020hp </span>
     <p>Peak Power</p>
    
    </div>
    <div class="order-now">
        <p class="button">order now</p>
        
        </div>
        </Fade>
</div>


    </div>






</>
)




}

export default Topcar;