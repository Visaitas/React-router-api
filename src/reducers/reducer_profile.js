import {
    SEARCH_TEXT ,
    SEARCH_SUCCESS,
    SEARCH_UN_SUCCESS,
    SEARCH_LOAD,
    PROFILE_LOAD,
    PROFILE_DATA,
    PAGE_CHANGE,
    PAGE_LOAD
} from '../actions/types';


const INITAL_STATE = { 
    term: '',
    data: '',
    loading: null,
    userdata: '',
    page: ''
};

export default (state = INITAL_STATE,action ) => {
    console.log(action);

    switch (action.type){
        case SEARCH_TEXT:
            return {...state ,term: action.payload}
        case SEARCH_LOAD:
            return {...state ,loading: true}     
        case SEARCH_SUCCESS:
           return {...state , data: action.payload , loading: false}
        case SEARCH_UN_SUCCESS:
            return { ...state , loading: false};  
        case PROFILE_LOAD:
            return { ...state }; 
        case PROFILE_DATA:
            return { ...state , userdata: action.payload  };     
        case PAGE_CHANGE:
            return { ...state , page: action.payload  };          
        default:
            return state;
    }
};

