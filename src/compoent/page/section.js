import React from 'react';
import './section.css';
import Fade from 'react-reveal/Fade';

function Section(data) {

  const style = {
    background:
      `url(${data.data.bg})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  };
  const right={
   
      backgroundColor: "white",
      color: "black",
      opacity: "0.65",
      display : data.data.rightbtn ==""?"none": 'block'
    
  }

  

  return (
  <>
    
      <div className="wrapper" style={style}>
      <Fade bottom>
        <div className="text">
          <h1 className="heading">{data.data.title}</h1>
          <p className="para">{data.data.desc}</p>
         
        </div>
        </Fade>
        </div>
        

        
        <div className="button">
       <Fade bottom>
          <button className="leftbtn">{data.data.leftbtn}</button>
          <button className="rightbtn" style={right}>{data.data.rightbtn}</button>
          </Fade >
          </div>
        <img className="down-arrow"
          src="https://raw.githubusercontent.com/mukesh462/image-for--tesla-clone/0615e34a50fcb2a0701a50039bfa9e9e365da26f/images/down-arrow.svg"
         
         
        />
     
     
    
  </>
  );
}
export default Section;
