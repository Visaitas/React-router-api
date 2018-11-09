import React, { Component } from 'react';
import '../App.css';
import Header from './common/Header'
import Bodytap from './common/Bodytap'
import Content from './common/Content'
import ProfileWidget from './common/ProfileWidget'
import NameContent from './common/NameContent'
import AboutMe from './common/AboutMe'
import { getProfile } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import { search_change_text , getUser} from '../actions'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = { status: null };
    }

    componentWillMount(){
        {this.props.getProfile()}
    }

    renderData(){
            return(
                <div className= "text-Content-position-about">
                    <h1> Profile Repository </h1>
                    <div className= "text-profile-position-git">
                        {this.renderListProfile()}
                    </div>
                </div>
            )
        
    }


    renderListProfile(){
        console.log(this.props.userdata)
        return _.map((this.props.userdata), (item) => {
            return(
                <div className = "text-profile-position-git-name-profile" >
                    <div className = "img-profile-position-git-name">
                        <img  className="img-size-profile" src={item.owner.avatar_url} alt="Card image cap" />
                        <div className="text-margin">
                            <p className ="text-center">Name: {item.name}  </p>
                            <p className ="text-center">Fullname: {item.full_name}  </p>
                            <p className ="text-center">description: {item.description}  </p>
                            <a className ="text-center" href={item.html_url}>{item.owner.repos_url}  </a>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
   
      return (
        <div>
            <div className={'App-body'}>
                <div className={'body-left'}>
                    <ProfileWidget />
                    <NameContent />
                    <Content />
                </div>
                <div className={'body-right'}>
                    <div>
                        {this.renderData()}
                    </div>
                </div>
            </div>
        </div>
      );
    }

   
}
  

const mapStateToProps = ({ profiles }) =>{

    const { userdata , term, data , loading} = profiles;

   return { userdata  , term ,  data , loading };
};



export default connect(mapStateToProps,{ 
    getProfile,
    search_change_text,
    getUser
})(Profile);





