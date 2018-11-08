import {
    SEARCH_TEXT ,
    SEARCH_SUCCESS,
    SEARCH_UN_SUCCESS,
    SEARCH_LOAD,
    PROFILE_LOAD,
    PROFILE_DATA
} from './types';
import axios from 'axios';


export const search_change_text = ( text ) => { 
    return {
        type: SEARCH_TEXT,
        payload:  text 
    };
};

export const getUser = ( text ) => {
  
    return (dispatch) => {
        dispatch({ type: SEARCH_LOAD  });
        axios.get(`https://api.github.com/search/repositories?q=${text}language:all&sort=stars&order=desc&per_page=32`)
        .then(response =>{
            dispatch({ type: SEARCH_SUCCESS , payload:  response.data });
        });
    };

};



export const getProfile = () => {
    var user = 'Visaitas';
    return (dispatch) => {
        dispatch({ type: PROFILE_LOAD  });
        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(response =>{
            dispatch({ type: PROFILE_DATA , payload:  response.data });
        });
    };
};







