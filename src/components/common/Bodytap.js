import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo.svg';

const Bodytap = ({ onTapSelect , Page }) => {
    console.log(Page)


    return (
        <div className={'body-tap'}>
            <div className="Body-tap"  onClick= {() => onTapSelect(1)}>
                <h1 className = {'w3-myfont'} style = {{ color:  Page === 1 ? '#080303': '#eee'}} > Profile </h1>
            </div>
            <div className="Body-tap"  onClick= {() => onTapSelect(2)}>
                <h1 className = {'w3-myfont'} style = {{ color:  Page === 2 ? '#080303': '#eee'}} > Myfavorite </h1>
            </div>
            <div className="Body-tap" onClick= {() => onTapSelect(3)}>
                <h1 className = {'w3-myfont'} style = {{ color:  Page === 3 ? '#080303': '#eee'}} > Clip </h1>
            </div>
        </div>
    )
};

export default Bodytap;
