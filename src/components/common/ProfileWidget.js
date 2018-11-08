import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo.svg';

const ProfileWidget = (prop) => {
    return (
        <div className={'Img-profile-position'}>
            <img src={require('../../asset/images/Profile.jpg')} className="Img-profile" />       
        </div>
    )
};

export default ProfileWidget;
