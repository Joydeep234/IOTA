import {Link} from 'react-router-dom'
import './LoginSignup.css'
const LoginSignup = () => {
  return (
    <>
      <div className="LoginSignupMain">
        <div className="logSinImg">
            <Link to='/'><img src="src/assets/iota.jpg" className='iotaImg' alt="" /></Link>
        </div>
        <div className="logsinbtn">
            <div className="logsinlink "><Link to='/Login' className='loginlink link'>Log in</Link></div>
            <div className="logsinlink"><Link to='/register' className='sighuplink link'>SignUP</Link></div>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;
