import ActionTypes from '../actions/types';

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case ActionTypes.CONNECT_ACCOUNT:
        return {
            ...state,
        };
    default:
        return state;
    }
};

export const defaultState = {};
