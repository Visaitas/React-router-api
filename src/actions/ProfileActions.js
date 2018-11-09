import {
    SEARCH_TEXT ,
    SEARCH_SUCCESS,
    SEARCH_UN_SUCCESS,
    SEARCH_LOAD,
    PROFILE_LOAD,
    PROFILE_DATA,
    PAGE_CHANGE,
    PAGE_LOAD
} from './types';
import axios from 'axios';


export const search_change_text = ( text ) => { 
    return {
        type: SEARCH_TEXT,
        payload:  text 
    };
};

export const getUser = ( text ) => {
    console.log("ACtion: " , text)
    return (dispatch) => {
        dispatch({ type: SEARCH_LOAD  });
        axios.get(`https://api.github.com/search/repositories?q=${text}language:all&sort=stars&order=desc&per_page=32`)
        .then(response =>{
            dispatch({ type: SEARCH_SUCCESS , payload:  response.data });
        }).catch(error =>{
            dispatch({ type: SEARCH_UN_SUCCESS  });
        })
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


// export function changePage( page ) {

//     dispatch({ type: PAGE_LOAD  });     
//     history.push('/');
//     dispatch({ type: PAGE_CHANGE  });   
// }



