import './Service.css'
import Navbar from '../components/Navbar';
import Foote from '../components/Foote';
// import { useDispatch,useSelector } from "react-redux";
// import { changeAuthTrue } from "../Features/Counter/CounterSlice.js";
import { useEffect } from 'react';
import axios from 'axios';
import Servicemain from '../components/Servicemain.jsx';
import { useNavigate } from 'react-router-dom';


const Service = () => {
  const navigate = useNavigate()
  // const [auth,setAuth] = useState(false)
  // const check = useSelector((state) => state.counter.auth)
  // const dispatch = useDispatch();

useEffect(()=>{
  (
    async () => {
      try {
          const res = await axios.get(`/api/v1/users/home`);
          if (res.data.status === 202) {
              navigate("/services");
              // dispatch(changeAuthTrue({ authe: true }));
              
          }
      } catch (error) {
         
          console.error("login time error", error);
          navigate("/login")
          // dispatch(changeAuthTrue({authe:false}))
      }
  }
  )() 
},[])
// if(!check){
//   setTimeout(()=>(5000))
//   navigate('/login')
//   return null
// }

  return (
    <>
      <Navbar/>
      <Servicemain/>
      <Foote/>
    </>
  );
}

export default Service;
