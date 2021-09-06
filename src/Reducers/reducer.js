import { SET_DATA } from "../Actions/action";

const initialState = {
    data:[]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }

    }
}
export default reducer;