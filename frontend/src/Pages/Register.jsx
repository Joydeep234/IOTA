import "./Register.css"
import axios from 'axios'
import { useState } from 'react'
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PasswordIcon from '@mui/icons-material/Password';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginSignup from "../components/LoginSignup";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        username:"",
        email:"",
        phone:"",
        company:"",
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
        const {username,email,phone,company,password,cpassword}=user

        if(password!==cpassword){
            return generateToast("Passwords and confirm Password not match")
            }       
                // eslint-disable-next-line no-unreachable
                try {
                    console.log("response.status");
                    const res = await axios.post('/api/v1/users/register', {
                        username,
                        email,
                        phone,
                        company,
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
                        navigate('/login')
                    }

                     
                } catch (error) {
                    console.error('Registration failed:', error);
                    if(error.response.status===403)generateToast('Fill All Credentials')
                    else if(error.response.status===402)generateToast('User already exists')
                else if(error.response.status===401)generateToast('retry Again')
                }
            
        }
    
  return (
    <><LoginSignup/>
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
                    <input type="text" className="registerinput" onChange={handleChange} name="email" value={user.email} placeholder="Email"/>
                </div>
                <div className="Registerinputcontainer">
                    <p>Phone.No:</p>
                    <input type="number" className="registerinput" onChange={handleChange} name="phone" value={user.phone} placeholder="Phone Number" maxLength='10'/>  
                </div>
                <div className="Registerinputcontainer">
                    <p>Company Name:</p>
                    <input type="text" className="registerinput" onChange={handleChange} name="company" value={user.company} placeholder="Company"/> 
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
            </form>
            <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Register;
