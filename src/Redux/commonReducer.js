import { getData } from "../Api/api";

const GET_USERS = 'GET_USERS';
const GET_FILTER_DATA = 'GET_FILTER_DATA';

let initialState = {
    filterData: [],
    arrayRecievedUsers: []
}

let commonReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USERS': {
            return {
                ...state,
                arrayRecievedUsers: action.users
            }
        }
        case 'GET_FILTER_DATA': {
            return {
                ...state,
                filterData: action.filterData
            }
        }
        default:
            return state;
    }
}

let getUsersAC = (users) => ({type: GET_USERS, users});
let getFilterDataAC = (filterData) => ({type: GET_FILTER_DATA, filterData})

export let getDataTC = () => {
    return (dispatch) => {
        getData.getUsers().then(response => {
            dispatch(getUsersAC(response));
        })
    }
}

export let getFilterDataTC = (filterData) => {
    return (dispatch) => {
        let arr = [];
        let allKeys = Object.keys(filterData);
        
        let selectedkeys = allKeys.filter(item => filterData[item] !== '' && filterData[item].length > 0);

        getData.getUsers().then(response => {
            
            response.filter(user => (

                selectedkeys.map( keys => user[keys] === filterData[keys].toString() ))
                .reduce((acc, value) => acc && value, true) && arr.push(user) )
                
                dispatch(getFilterDataAC(arr));
        });
        
    }
}

export default commonReducer;

