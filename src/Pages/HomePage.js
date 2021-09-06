import { useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux'
import { getData } from "../Services/api";


const Home = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getData());
    },[])
    const data = useSelector((state) => state.data);
    console.log(data);
    return(
        <>
        <h1>Home</h1>

    
        </>
    )
}
export default Home;