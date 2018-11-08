import React, { Component } from 'react';
import { connect } from 'react-redux';




class ProfileList extends Component {

    renderList(){
        return this.props.profiles.map((profile) =>{
            return(
                <li key ={profile.title} className = "list-group-item">
                    {profile.title}
                </li>
            )
        });
    }

    render(){
       
        return(
            <ul className ="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapDispatchToProps(state){
    // Whatever is returned will show up as props
    // inside of ProfileList
    return{
        profiles: state.profiles
    };
}

export default connect(mapDispatchToProps,{
    
})(ProfileList);