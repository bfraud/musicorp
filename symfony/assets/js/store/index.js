import { createStore } from 'redux';
import { reducer, defaultState } from '../reducers';

export default function getStore(state) {
    const initialState = {
        ...defaultState,
        ...state,
    };

    return createStore(
        reducer,
        initialState,
    );
}
