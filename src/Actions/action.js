export const SET_DATA = 'SET_DATA';
export const FILTERS = "FILTERS";
export const FILTER_DATA = "FILTER_DATA";


export const setData = (payload) => ({ type: SET_DATA, payload: payload });
export const filters = (payload) => ({ type: FILTERS, payload: payload });
export const filterData = (payload) => ({ type: FILTER_DATA, payload: payload });
