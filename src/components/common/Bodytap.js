import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
const Bodytap = ({ onTapSelect , Page }) => {
    console.log(Page)


    return (
        <div className={'body-tap'}>
            <div className="Body-tap" >
                <h1 className = {'w3-myfont'} style = {{ color:  Page === 1 ? '#080303': '#eee'}} ><Link to="/">Home</Link>  </h1>
            </div>
            <div className="Body-tap" >
                <h1 className = {'w3-myfont'} style = {{ color:  Page === 2 ? '#080303': '#eee'}} ><Link to="/Profile">Profile</Link>  </h1>
            </div>
            <div className="Body-tap">
                <h1 className = {'w3-myfont'} style = {{ color:  Page === 3 ? '#080303': '#eee'}} ><Link to="/">Content</Link></h1>
            </div>
        </div>
    )
};

export default Bodytap;
