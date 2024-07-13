import './App.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Service from './Pages/Service.jsx'
import Review from './Pages/Review.jsx'
import Contacts from './Pages/Contacts.jsx'
import { useDispatch } from 'react-redux'
import { changeAuthTrue } from './Features/Counter/CounterSlice.js'
import Adminregister from './Pages/Adminregister.jsx'
import Adminlogin from './Pages/Adminlogin.jsx'
import AdminHome from './Pages/AdminHome.jsx'
function App() {
  // const counter = useSelector((state) => state.counter.auth)
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
                  dispatch(changeAuthTrue({ authe:auth, firstChar }));
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
  },[dispatch,message.username,auth]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route  path="/register" element={<Register />}/>
          <Route  path='/login'     element={<Login/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/review' element={<Review />}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/adminregister' element={<Adminregister/>}/>
          <Route path='/adminlogin' element={<Adminlogin/>}/>
          <Route path='/adminhome' element={<AdminHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
