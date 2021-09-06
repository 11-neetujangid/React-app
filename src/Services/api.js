import { setData } from "../Actions/action";
import axios from 'axios'


const url = "https://shibe.online/api/shibes?count=[1-100]"
export const getData = () => async (dispatch, getState) => {
   
    try {
        const response = await axios.get(`${url}`);
        console.log(response.data)
        dispatch(setData(response.data));

    } catch (err) {
        console.log(err);
    }
}