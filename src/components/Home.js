import React, { Component } from 'react';
import '../App.css';
import Header from './common/Header'
import Bodytap from './common/Bodytap'
import Content from './common/Content'
import ProfileWidget from './common/ProfileWidget'
import NameContent from './common/NameContent'
import AboutMe from './common/AboutMe'
import { search_change_text , getUser } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = { status: null };
    }


    onInputChange(term){
        this.props.search_change_text(term);
    }

    onPressKey(term){
        this.props.getUser(term);
    }


    renderData(){
        if(this.props.loading === true){
            console.log("Not Data",this.props.data)

            return(
                <div className= "text-Content-position-about">
                    <h1> Data Not Found </h1>
                </div>
            )
        }else if(this.props.loading === false){
            return(
                <div className= "text-Content-position-about">
                    <h1> Found Data = {this.props.data.items.length}</h1>
                    <div className= "text-profile-position-git">
                        {this.renderListProfile()}
                    </div>
                </div>
            )
        }
    }

    renderListProfile(){
        return _.map((this.props.data.items), (item) => {
            return(
                <div className = "text-profile-position-git-name" >
                    <div>
                        <img  width="20%" src={item.owner.avatar_url} alt="Card image cap" />
                    </div>
                    <div>
                        <h3> {item.name}  </h3>
                    </div>
                </div>
            )
        })
    }


    render() {
      return (
        <div>
            <Bodytap />
            <Header />
            <div className={'App-body'}>
                <div className={'body-left'}>
                    <ProfileWidget />
                    <NameContent />
                    <Content />
                </div>
                <div className={'body-right'}>
                    <div className="search-bar">
                        <input 
                            className= "input"
                            value = {this.props.term}
                            onChange={(value)=>this.onInputChange(value.target.value)}
                        />
                        <button 
                        className= "search"         
                        onClick = {(value)=>this.onPressKey(value.target.value)}
                        value = {this.props.term}
                        >
                            Search
                        </button>
                    </div>
                    <div>
                        {this.renderData()}
                    </div>
                </div>
            </div>
        </div>
      );
    }

   
}
  

const mapStateToProps = ({profiles}) =>{

    const { term, data , loading } = profiles;

   return { term ,  data , loading  };
};



export default connect(mapStateToProps,{ 
    search_change_text,
    getUser
})(Home);