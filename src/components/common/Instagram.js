import React, { Component } from 'react';
import '../../App.css';
import InstagramEmbed from 'react-instagram-embed'


const Instagram = (prop) => {
    return (
        <div className = {'Instagram-position'}> 
            <InstagramEmbed
            url='https://instagr.am/p/BpzUoYLFv8A/'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
        </div>
    )
};

export default Instagram;     


