import axios from 'axios';
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { changeAuthTrue } from "../Features/Counter/CounterSlice.js";


const Navbar = () => {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const check = useSelector((state) => state.counter.auth)
    const loginLogo = useSelector((state) => state.counter.firstChar)
    // console.log(props);

const handlelogout = async ()=>{
    try {
        const res = await axios.get(`/api/v1/users/logout`)
        if(res.status === 200)
            {
                location.reload(true);
                dispatch(changeAuthTrue({ authe: false }));
            }
    } catch (error) {
        console.log("logged out error",error);
    }
}

// const navigatetoreview = ()=>{
//     navigate('/review',{state:{auth:check}})
// }
// const navigatetoServices = ()=>{
//     navigate('/services',{state:{auth:check}})
// }
// const navigatetoContacts = ()=>{

// }
// const navigatetoHome = ()=>{
//     navigate('/',{state:{auth:check}})
// }

  return (
    <>
      <div className="NavbarMianContainer">
        <div className="navbarinconatiner">
            <div className="navbarImg">
            <Link to='/'><img src="src/assets/iota.jpg" className="iotaImg" alt="" /></Link>
        </div>
        {/* <div className="navbarLinks">
                <button onClick={navigatetoHome} className='Linktoanotherpage'>Home</button>
                <button onClick={navigatetoServices} className='Linktoanotherpage'>Services</button>
                <button onClick={navigatetoContacts} className='Linktoanotherpage'>Contacts</button>
                <button onClick={navigatetoreview} className='Linktoanotherpage'>Review</button>
        </div> */}
        <div className="navbarLinks">
            <Link className="linktoanotherpage" to={'/'}>Home</Link>
            <Link className="linktoanotherpage" to={'/services'}>Services</Link>
            <Link className="linktoanotherpage" to={'/contact'}>Contact Us</Link>
            <Link className="linktoanotherpage" to={'/review'}>review</Link>
        </div>
        <div className="navbarLinkContainer">
            
            <div className="navbarinout">
                {
                    check?
                    <div className='navbarLogin'>
                        <h1>{loginLogo}</h1>
                        <button  className='navbarLoginButton'onClick={handlelogout}>Logout</button> 
                    </div>
                    :
                    <div className='navbarLogout'>
                        <p><Link to="/login" className='navbarloginlink'>Login</Link> / <Link to="/register" className='navbarloginlink'>signup</Link></p>  
                    </div>
                }
            </div>
        </div>
        </div>
        {/* <div className="navbarlogininfocontainer">
                            <p>username:sfssfsffsfsfs</p>
                            <p>email:fsffssfsffsfffssffssfsfffs</p>
                        </div> */}
      </div>
      
    </>
  );
}

export default Navbar;
