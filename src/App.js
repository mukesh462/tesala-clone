import React from 'react';
import './style.css';
import Section from './compoent/page/section.js';
import Navbar from './compoent/topbar/navbar.js';
import Topcar from './compoent/sumcomponent/Topcar.js';
import NewInit from './compoent/sumcomponent/NewInit.js';
import Videocarosal from './compoent/sumcomponent/Videocarosal.js';
import Mideldes from './compoent/sumcomponent/Midledes.js';
import Carword from './compoent/sumcomponent/Carword.js';
import Carbody from './compoent/sumcomponent/Carbody.js';
// import Carwithslide from './compoent/sumcomponent/Carwithslide.js';

export default function App() {
  const sectionItems=[{

    title:"Model 3",
    desc:"Order Online for Touchless Delivery",
    bg:"https://github.com/mukesh462/image-for--tesla-clone/blob/main/images/model-3.jpg?raw=true",
    leftbtn:"custom order",
    rightbtn:"existing inventory",

  },
  {
    title:"Model Y ",
    desc:"Order Online for Touchless Delivery",
    bg:"https://github.com/mukesh462/image-for--tesla-clone/blob/main/images/model-y.jpg?raw=true",
    leftbtn:"custom order",
    rightbtn:"existing inventory",

  },
  {
    title:"Model S ",
    desc:"Order Online for Touchless Delivery",
    bg:"https://github.com/mukesh462/image-for--tesla-clone/blob/main/images/model-s.jpg?raw=true",
    leftbtn:"custom order",
    rightbtn:"existing inventory",
    


  },
  {
    title:"Model X ",
    desc:"Order Online for Touchless Delivery",
    bg:"https://github.com/mukesh462/image-for--tesla-clone/blob/main/images/model-x.jpg?raw=true",
    leftbtn:"custom order",
  
    rightbtn:"existing inventory",
  },
  {
    title:"Solar Panels  ",
        desc:"Lowest Cost Solar Panels in America ",
        bg:"https://github.com/mukesh462/image-for--tesla-clone/blob/main/images/solar-panel.jpg?raw=true",
        leftbtn:"order now",
        rightbtn:"Learn more",
  },
  {
    title:"Accessories  ",
    desc:"",
    bg:"https://github.com/mukesh462/image-for--tesla-clone/blob/main/images/accessories.jpg?raw=true",
    rightbtn:"",
    leftbtn:"Shop now",
  }
]
  return (
    <>
    <div>
      <Navbar />
      {sectionItems.map((item)=> <Section data={item} />)}
       {/* <Topcar />
      <NewInit/>
      <Videocarosal/>
      <Mideldes/>
      <Carword/>
      <Carbody/>
      <Carwithslide/> */}
    </div>
    </>
  );
}
