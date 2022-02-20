import {
    SET_USER_INFO,
    SET_USER_TODO_LIST,
} from '../consts/actionTypes';

export default function reducer(state = {
    userInfo: null,
    userTodoList: [],
}, action) {
    switch (action.type) {
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: action.data,
            };
        }
        case SET_USER_TODO_LIST: {
            return {
                ...state,
                userTodoList: action.data,
            };
        }
    }
    return state;
}
