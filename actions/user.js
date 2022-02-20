import {
    SET_USER_INFO,
    SET_USER_TODO_LIST,
} from '../consts/actionTypes';

export function setUserInfo(userInfo) {
    return { type: SET_USER_INFO, data: userInfo };
}

export function setUserTodoList(userTodoList) {
    return { type: SET_USER_TODO_LIST, data: userTodoList };
}