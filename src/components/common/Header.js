import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo.svg';

const Header = (prop) => {
    return (
        <header className="App-header">
                <img src={require('../../asset/images/Forest.jpg')} className="App-logo" />
        </header>
    )
};





export default Header;

// <p>
// <code>{prop.headerText} {'\t'} 
//     <a
//         className="App-link"
//         href="https://www.facebook.com/visitas.somrith"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//         {prop.headerNameText}
//     </a> 
// </code> 
// </p>