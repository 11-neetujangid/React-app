import { setData } from "../Actions/action";
import axios from 'axios';


const url = "http://shibe.online/api/shibes"


export const getData = () => async (dispatch, getState) => {
    console.log("helo here")
    try {
        // console.log("helo here")
        const response = await axios.get(`${url}?count=10`);
        console.log(response.data)
        dispatch(setData(response.data));

    } catch (err) {
        console.log("Errror")
        console.log(err);
    }
}
