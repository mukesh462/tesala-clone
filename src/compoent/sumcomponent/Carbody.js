import React from 'react';
import './Carbody.css';
import Fade from 'react-reveal/Fade';


function Carbody(){

return(
<>


<div class="container-body">
        <div class="container-text">
          <Fade bottom>
            <h2 class="container-heading">Electric Powertrain</h2>
            </Fade>
            <Fade bottom>
            <p class="container-body-para">Model S platforms unite powertrain and battery technologies for unrivaled
                performance, range and <br/>efficiency. New module and pack thermal architecture allows faster charging
                and gives you more power<br/>and endurance in all conditions.</p>
                </Fade>
        </div>
        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3da49427-d22a-4fe1-bc36-3653dc426dfd/bvlatuR/std/1920x900/Model-S-Performance-Tri-Motor-Desktop"
            alt="" class="body-img"/>
        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5d1e0fa7-71ae-424f-a9ca-36ec8e3cf532/bvlatuR/std/960x450/Model-S-Performance-Tri-Motor-Mobile
" alt="" class="body-mobile"/>

    </div>
    <div class="full-box-content">

        <div class="first-box-content">
            <h4 class="first-h4">
                Model S
            </h4>
            <p class="first-para">
                Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane
                power and maximum control.
            </p>
            <div class="main-sub-text">
                <div class="sub-text">
                    <h3 class="sub-text-h3">3.1 s</h3>
                    <span>0-60 mph</span>
                </div>
                <div class="sub-text">
                    <h3 class="sub-text-h3">405 mi</h3>
                    <span>Range (EPA est.)</span>

                </div>
                <div class="sub-text">
                    <h3 class="sub-text-h3">670 hp</h3>
                    <span>Peak Power</span>
                </div>
            </div>
        </div>
        <div class="first-box-content">
            <h4 class="first-h4">
                Model S Plaid
            </h4>
            <p class="first-para">
                Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque
                vectoring and three independent carbon-sleeved rotors.
            </p>
            <div class="main-sub-text">
                <div class="sub-text">
                    <h3 class="sub-text-h3">1.99 s</h3>
                    <span>0-60 mph</span>
                </div>
                <div class="sub-text">
                    <h3 class="sub-text-h3">396 mi</h3>
                    <span>Range (EPA est.)</span>

                </div>
                <div class="sub-text">
                    <h3 class="sub-text-h3">1020 hp</h3>
                    <span>Peak Power</span>
                </div>
            </div>
        </div>



    </div>
    <Fade bottom>
    <p class="bottom-text">* With rollout subtracted</p>
</Fade>

</>




)



}

export default Carbody;