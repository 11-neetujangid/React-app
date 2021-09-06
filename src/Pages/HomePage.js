import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getData } from "../Services/api";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("hellooo")
        dispatch(getData());
    }, [])
    const data = useSelector((state) => state.record);
    console.log(data);
    return (
        <>
            <h1>Home</h1>
            <div >
                {
                    data.map(record => (
                        <img src={record} alt='img' />
                    ))
                }
            </div>

        </>
    )
}
export default Home;