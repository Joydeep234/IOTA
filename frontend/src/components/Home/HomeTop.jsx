import './HomeTop.css'
import { Link } from 'react-router-dom';
const HomeTop = (props) => {
  return (
    <>
      {
        props?
        <div className="Hometopmaincontainer">
            <div className="hometopcontainerfirst">
                <h1>Success starts with</h1>
                 <br/> 
                 <h1>hardworking consultants</h1>
            </div>
            <div className="hometopcontainersecond">
                <p>At IOTA, <span className="auto-type">we are making digital solutions</span> </p>
                <h3>TO JOIN OUR SERVICES</h3>
            </div>
            <Link className="hometopcontainerthirdLink" to='/services'>
                <div className="hometopcontainerthird">
                    <p  className="hometopcontainerthirdp">Try now</p>
                </div>
            </Link>
        </div>
        :
        <div className="Hometopmaincontainer">
            <div className="hometopcontainerfirst">
                <h1>
                Success starts with <br/> hardworking consultants
                </h1>
            </div>
            <div className="hometopcontainersecond">
                <p>At IOTA,  <span className="auto-type">we are making digital solutions</span> </p>
                <h3>TO JOIN OUR SERVICES</h3>
            </div>
            <Link className="hometopcontainerthirdLink" to='/register'>
                <div className="hometopcontainerthird">
                    <p  className="hometopcontainerthirdp">Try now</p>
                </div>
            </Link>
        </div>
      }
    </>
  );
}

export default HomeTop;
