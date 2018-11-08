import React, { Component } from 'react';
import '../../App.css';

const BodyComponent =(props)=> {
    return (
        <div className={'App-body'}>
            <div className={'body-left'}>
                <button className={'btn-profile'} title={'Press'} />
            </div>
            <div className={'body-right'}>
                <button className={'btn-profile'} title={'Press'}/>
            </div>
        </div>
    );
}

export default BodyComponent