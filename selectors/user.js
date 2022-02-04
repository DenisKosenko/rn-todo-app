import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

const makeSelectUserInfo = () => createSelector(
    selectUser,
    (userState) => {
        if(userState) {
            return userState.userInfo;
        }
        return { userInfo: null }
    },
);

export {
    makeSelectUserInfo
};
