import * as types from './ActionTypes';


export function getPageResult(url){
    return{
        type: types.GET_PAGERESULT,
        url
    }
}