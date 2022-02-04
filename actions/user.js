import {
    SET_USER_INFO
} from '../consts/actionTypes';

export function setUserInfo(userInfo) {console.log(userInfo);
    return { type: SET_USER_INFO, data: userInfo };
}