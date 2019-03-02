import * as types from '../actions/ActionTypes';
import {fromJS} from 'immutable';

const initialState = fromJS({
    url: '',
    pageResult: '',
    Result: null,
    Loading: false,
});

export default function link(state = initialState, action){
    switch(action.type) {
        case types.GET_PAGERESULT:
            return state.setIn(['Loading'], true);
        case 'GET_PAGERESULT_SUCCESS':
            return state.setIn(['pageResult'], action.pageResult).setIn(['Result'], action.Result).setIn(['Loading'], false);
        case 'RESULT_MESSAGE':
            return state.setIn(['Result'], action.Result).setIn(['Loading'], false);
        default:
            return state;
    }
    return state;
}