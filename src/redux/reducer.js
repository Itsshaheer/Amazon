import *  as types from  './actiontypes'
const initialState= {
    loading: false,
    basket: [],
    user: null,
    error:null,
}
const basketReducer= (state = initialState, action) =>{
    switch(action.type) {
        case types.ADD_TO_BASKET:
            const newbasket= [...state.basket, action.payload]
            return {
                ...state,
                basket: newbasket
            }
        case types.REGISTER_START:
            case types.LOGIN_START:
                case types.LOGOUT_START:
            return{
                ...state,
                loading:true
            };
            case types.REGISTER_SUCCESS:
                case types.LOGIN_SUCCESS:
                return{
                    ...state, 
                    loading: false,
                    user: action.payload
                };
                case types.LOGOUT_SUCCESS:
                    return {
                        ...state,
                    user:null
                    }
                case types.SET_USER:
                    return {
                        ...state, 
                        user: action.payload
                    };
                case types.REGISTER_FAIL:
                    case types.LOGIN_FAIL:
                        case types.LOGOUT_FAIL:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                    }
        default: 
        return state;

    }
}
export default basketReducer