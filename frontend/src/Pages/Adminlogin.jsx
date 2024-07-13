import './Adminlogin.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Adminlogin = () => {

    const navigate = useNavigate()
    

    const generateToast = (toastdata)=>{
        toast.error(`${toastdata}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored"
            });
        }

    
        
    const [loginUser,setLoginUser] = useState({
        username:"",
        email:"",
        password:""
    })
    const handlechange = (e)=>{
        setLoginUser({...loginUser,[e.target.name]:e.target.value})
    }


//handle submit here..............................................
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const { username,email,password }= loginUser
        if(!username || !email ||!password){
            generateToast(`All fields are required`)
        }
        try {
            const res = await axios.post(`/api/v1/users/admin/login`,{
                username,
                email,
                password
            })
            if(res.status ===200)
            {   console.log("sussessfully login");
                toast.success(`Successfully Login`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored"
                    });
                    navigate('/adminhome')
            }
        } catch (error) {
            console.error("login time error",error);
            if(error.response.status===403)generateToast('Invalid Credentials')
            else if(error.response.status===402)generateToast('User Not Found')
            else if(error.response.status===401)generateToast('Fill All Credentials')
        }
    }

  return (
    <>
         <div className="LoginMainConatiner">
        <div className="LoginInnerFrame">
            <form className='LoginForm' onSubmit={handleSubmit}>
                <div className="LoginInputContainer">
                    <label>Username:</label><br/>
                    <input type="text" className="LoginInput"  name='username' onChange={handlechange} value={loginUser.username}/>
                </div>
                <div className="LoginInputContainer">
                    <label>email:</label><br/>
                    <input type="email" className="LoginInput" name='email' onChange={handlechange} value={loginUser.email}/>
                </div>
                <div className="LoginInputContainer">
                    <label>password:</label><br/>
                    <input type="password" className="LoginInput" name='password' onChange={handlechange} value={loginUser.password}/>
                </div>
                <button type='submit'>Log in</button>             
            </form>
        </div>
        <ToastContainer/>
      </div> 
    </>
  );
}

export default Adminlogin;
