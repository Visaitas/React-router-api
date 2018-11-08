import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo.svg';
import ProfileWidget from './ProfileWidget'
const Content = (prop) => {
    return (
        <div className={'Img-profile-position'}>
            <div className = {''}>
                <h2 style ={ { color : 'rgb(78, 164, 190)'}}> Contact </h2>
            </div>
            <div className = {'contact-list-position'}>
                <div className = {'contact-list-positon-icon'}>
                    <a className = {'contact-list-positon-icon-text'} href={"https://www.facebook.com/visitas.somrith"}> 
                        <img src = {require('../../asset/images/Facebook.png')} className ={'img_Contact'} />
                        Visitas Somrith 
                    </a>
                </div>
                <div className = {'contact-list-positon-icon'}>
                    <a  className = {'contact-list-positon-icon-text'}>
                        <img src = {require('../../asset/images/Line.png')} className ={'img_Contact'}/>
                        Visaitas 
                    </a>
                </div>
                <div className = {'contact-list-positon-icon'}>
                    <a  className = {'contact-list-positon-icon-text'}>
                        <img src = {require('../../asset/images/Instagram.png')} className ={'img_Contact'}/>
                         vvippz 
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Content;     


    