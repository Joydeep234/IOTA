import { useNavigate,Link } from 'react-router-dom';
import './Adminregister.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

const Adminregister = () => {
 const navigate = useNavigate()
 const [user, setuser] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:""
});
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
    const handleChange = (e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const {username,email,password,cpassword}=user

        if(password!==cpassword){
            return generateToast("Passwords and confirm Password not match")
            }       
                // eslint-disable-next-line no-unreachable
                try {
                    console.log("response.status");
                    const res = await axios.post('/api/v1/users/admin/register', {
                        username,
                        email,
                        password,
                    });
                    if(res.status===201){
                        toast.success(`Successfully registered`, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: false,
                            progress: undefined,
                            theme: "colored"
                            });
                        navigate('/adminlogin')
                    }

                     
                } catch (error) {
                    console.error('Registration failed:', error);
                    if(error.response.status===403)generateToast('Fill All Credentials')
                    else if(error.response.status===402)generateToast('User already exists')
                else if(error.response.status===401)generateToast('retry Again')
                }
            
        }

  return (
    <>
      <div className="registerMainContainer">
        <div className="registerInnerContainer">
        <div className="textRegister"><h1>Sign up To</h1><br/><h1> get Awesome Things</h1></div>
        
            <form onSubmit={handleSubmit} className="registerForm">
            <h1>Register here</h1>
                <div className="Registerinputcontainer">
                    <p>Username:</p>
                    <input type="text" className="registerinput" onChange={handleChange} name="username" value={user.username} placeholder="Username"/>
                </div>
                <div className="Registerinputcontainer">
                    <p>Email:  </p>
                    <input type="email" className="registerinput" onChange={handleChange} name="email" value={user.email} placeholder="Email"/>
                </div>
                <div className="Registerinputcontainer">
                    <p>Password:</p>
                    <input type="password" className="registerinput" onChange={handleChange} name="password" value={user.password} placeholder="password"/>
                </div>
                <div className="Registerinputcontainer">
                    <p>Confirm Password:</p>
                    <input type="password" className="registerinput" onChange={handleChange} name="cpassword" value={user.cpassword} placeholder="Confirm password"/>
                </div>
                <div className="registerSubmitButtonContainer">
                    <button className="registerSubmitButton" type="submit">Sign up</button>
                </div>   
                <p>already registered <Link to={'/adminlogin'}>Login</Link></p>          
            </form>
            <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Adminregister;
