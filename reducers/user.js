import {
    SET_USER_INFO, 
} from '../consts/actionTypes';

export default function reducer(state = {
    userInfo: null
}, action) {
    switch (action.type) {
        case SET_USER_INFO: {
            console.log(action);
            return {
                ...state,
                userInfo: action.data,
            };
        }
    }
    return state;
}
