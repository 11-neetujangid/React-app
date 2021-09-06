import { SET_DATA, FILTERS, FILTER_DATA } from "../Actions/action";

const initialState = {
    record: [],
    serach: '',
    data: [],
    filetr: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DATA:
            return {
                ...state,
                record: action.payload,
            }
        case FILTERS:
            console.log(action.payload);
            console.log("filter");

            return {
                ...state,
                search: action.payload.search,

            }
        case FILTER_DATA:
            console.log(action.payload);
            return {
                ...state,
                record: action.payload,
            }
        default:
            return state;
    }
}
export default reducer;