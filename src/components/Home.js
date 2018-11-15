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
import { Grid, Cell } from 'react-mdl'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = { status: null };
    }

    render() {
      return (
            <div style ={{ width: '100%' , margin: 'auto' ,}}>
                <Grid className="landing-grid">
                    <Cell col={12}> 
                        <div style = {{ paddingTop: '5%'}}>
                            <img 
                                src = {require('../asset/images/Profile.jpg')}
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>
                        <div className ="banner-text">
                            <h1>internship</h1>

                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | MySQL </p>

                            <div className="social-links">   
                                {/* LinkedIn */}
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> 
                                    <i className="fa fa-linkedin-square" aria-hidden="true"  />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/Visaitas" target="_blank" rel="noopener noreferrer"> 
                                    <i className="fa fa-github-square" aria-hidden="true"  />
                                </a>
                                 {/* Facebook */}
                                 <a href="https://www.facebook.com/visitas.somrith" target="_blank" rel="noopener noreferrer"> 
                                    <i className="fa fa-facebook-square" aria-hidden="true"  />
                                </a>
                                {/* Youtube */}
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> 
                                   <i className="fa fa-youtube-square" aria-hidden="true"  />
                               </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
      );
    }

   
}
  

const mapStateToProps = ({profiles}) =>{

    const { data  } = profiles;

   return {  data  };
};



export default connect(mapStateToProps,)(Home);



