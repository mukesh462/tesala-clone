import React from 'react';
import './topbar.css';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [navsts,setNavsts]= useState("false")
  const nav={

    textTransform: "capitalize",
    listStyle: "none",
    position: "fixed",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection:" column",
    padding: "25px",
    backgroundColor: "white",
    fontWeight:" 600",
    width:" 220px",
    transition:"0.30s ease-in-out",
  transform: navsts=="false"? " translateX(100%)": "translateX(0%)",
  




  }
  return (
    <div className="container_top">
      <img
        src="https://raw.githubusercontent.com/mukesh462/image-for--tesla-clone/79f5339f8526daaf3b45a8a295837249624e9621/logo%20new.svg"
        alt=""
        className="logo"
      />

      <div className="menu">
        <a href="" className="a">Model S</a>
        <a href="" className="a">Model 3</a>
        <a href="" className="a">Model X</a>
        <a href="" className="a">Model Y</a>
        <a href="" className="a">Solar panel</a>
        <a href="#" className="a" >Solar Roof</a>
      </div>
      <div className="rightmenu">
        <a href="" className="a"> Shop </a>

        <a href="" className="a" > Account</a>

        <p className="sidemenu"  onClick={()=> setNavsts("true")}><MenuIcon/></p>
      </div>

      <div style={nav}>
        <span className="close"  onClick={()=> setNavsts("false")}>
          <CloseIcon />
        </span>
        <li className="list">existing inventory</li>
        <li className="list">used inventory</li>
        <li className="list">trade-in</li>
        <li className="list">test drive</li>
        <li className="list">cybertruck</li>
        <li className="list">roadster</li>
        <li className="list">semi</li>
        <li className="list">charging</li>
        <li className="list">powerwall</li>
        <li className="list">commerical energy</li>
        <li className="list">ulilities</li>
        <li className="list">find us</li>
      </div>
    </div>
  );
}

export default Navbar;
