import { useEffect, useState } from "react"
import axios from 'axios'
import  "./Home.css"
import Navbar from "../components/Navbar"
import  Foote from "../components/Foote"
import HomeTop from "../components/Home/HomeTop"
import Homeservice from "../components/HomeService/Homeservice"
import Client from "../components/Client"
import { useSelector, useDispatch } from 'react-redux'
import { changeAuthTrue } from '../Features/Counter/CounterSlice.js'


const Home = () => {
    const counter = useSelector((state) => state.counter.auth)
    const dispatch = useDispatch()
    
    const [auth,setAuth] = useState(false)
    const [message,setMessage] = useState({
        email:"",
        username:""
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/v1/users/home`);
                if (res.data.status === 202) {
                    setAuth(true)
                    console.log("username is",message.username);
                    const firstChar = message.username.charAt(0).toUpperCase(); // Getting the first character of the username
                    console.log("firstcahr is",firstChar);
                    dispatch(changeAuthTrue({ authe: true, firstChar }));
                    const {email,username} = res.data.message
                    setMessage({email,username})
                }
            } catch (error) {
               
                console.error("login time error", error);
                setAuth(false);
                dispatch(changeAuthTrue(false))
            }
        };

        fetchData(); 
    },[]);

  return (
    <>
       <div className="HomemainContainer">
        {
            auth?
            <div>
                <Navbar check = {auth} details = {message}/>
                <div>{
                    counter
                }</div>
                <HomeTop check = {auth}/>
                <Homeservice check = {auth}/>
                <Client/>
                <Foote/>
            </div>
            :
            <div>
                <Navbar check={auth} details={message}/>
                <HomeTop check = {auth}/>
                <Homeservice check = {auth}/>
                <Client/>
                <Foote/>
            </div>
        }
       </div> 
    </>
  );
}

export default Home;
