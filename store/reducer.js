import {
    ADD_ORDER,
    CHANGE_VALUE,
    FETCH_ERROR,
    FETCH_FINALLY,
    FETCH_START,
    FETCH_SUCCESS,
    TOGGLE_MODAL
} from "./actionTypes";

const initialState = {
    showSpinner: false,
    menu: null,
    error: null,
    orderList: null,
    modalVisible: false,
    name: '',
    address: '',
    phone: '',

};

const reducer = (state = initialState, action) => {
        console.log('reducer 10', state.menu);
        switch (action.type) {

            case FETCH_START:
                return {
                    ...state,
                    showSpinner: true,
                };

            case FETCH_SUCCESS:
                return {
                    ...state,
                    showSpinner: false,
                    menu: action.resp,
                };

            case FETCH_ERROR:
                return {
                    ...state,
                    showSpinner: false,
                    error: action.error
                };

            case FETCH_FINALLY:
                return {
                    ...state,
                    showSpinner: false,
                };

            case ADD_ORDER:
                console.log('action order !!!!!!!!!!!!!!!!',action.order);
                return {
                    ...state,
                    orderList: action.order,
                };

            case TOGGLE_MODAL:
                return {
                    ...state,
                    modalVisible: !state.modalVisible,
                };

            case CHANGE_VALUE:
                console.log('action order !!!!!!!!!!!!!!!!',action);
                const {name, value} = action.target;
                return {
                    ...state,
                    [name]: value,
                };

            default:
                break;
        }
        return state;

};

export default reducer;
