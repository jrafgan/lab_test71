import {
    ADD_ORDER, CHANGE_VALUE,
    FETCH_ERROR,
    FETCH_FINALLY,
    FETCH_GET_MENU,
    FETCH_START,
    FETCH_SUCCESS,
    TOGGLE_MODAL
} from "./actionTypes";
import axios from '../axios_url'

export const fetchFinnaly = () => {
    return {type: FETCH_FINALLY}
};


export const fetchSuccess = (resp) => {
    return {type: FETCH_SUCCESS, resp}
};

export const fetchStart = () => {
    return {type: FETCH_START}
};

export const fetchError = (error) => {
    return {type: FETCH_ERROR, error}
};

export const addOrder = (order) => {
    return {type: ADD_ORDER, order}
};

export const toggleModal = () => {
    return {type: TOGGLE_MODAL}
};

export const changeValue = (target) => {
    console.log(' change value target ++++++++++++++++++++++++++++',target);
    return {type: CHANGE_VALUE, target}
};

export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(fetchStart());
console.log('axios 1');
        axios.get('pizzaDishes.json').then(response => {

            dispatch(fetchSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
        });
    }
};