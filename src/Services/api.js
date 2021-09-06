import { setData, filterData} from "../Actions/action";
import axios from 'axios';


const url = "https://shibe.online/api"


export const getData = () => async (dispatch, getState) => {
    console.log("helo here")
    try {
        // console.log("helo here")
        // const response = await axios.get(`${url}/shibes?count=10`);
        const response = await axios.get(`${url}/shibes?count=10`)
        console.log(response.data)
        dispatch(setData(response.data));

    } catch (err) {
        console.log("Errror")
        console.log(err);
    }
}

export const limitFilter = (limit) => async (dispatch, getState) => {
    console.log(`${url}?count=${limit}`)
    try {
        const response = await axios.get(`${url}/shibes?count=${limit}`);
        console.log(response.data)
        dispatch(filterData(response.data));
    } catch (error) {
        console.log(error);
    }
}

export const getByName = (name) => async (dispatch, getState) => {
    console.log(`${url}/${name}`)
    try {
        const response = await axios.get(`${url}/${name}`);
        console.log(response.data)
        dispatch(filterData(response.data));
    } catch (error) {
        console.log(error);
    }
}
export const urlfilter = () => async (dispatch, getState) => {
    console.log(`${url}/shibes?count=10&urls`)
    try {
        const response = await axios.get(`${url}/shibes?count=10&urls=false`);
        console.log(response.data)
        dispatch(filterData(response.data));
    } catch (error) {
        console.log(error);
    }
}