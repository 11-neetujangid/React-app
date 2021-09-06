import { SET_DATA } from "../Actions/action";

const initialState = {
    record: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DATA:
            return {
                ...state,
                record: action.payload,
            }
        default:
            return state;
    }
}
export default reducer;