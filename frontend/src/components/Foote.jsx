import './Footer.css'
import {Link} from 'react-router-dom'
const Foote = () => {
  return (
    <>
      <div className="footermainContainer">
        <div className="footermainupper">
            <div className="calluscontainer">
                <ul className="callusul footerul">
                    <li className='footerheader footerli'>Call Us:</li>
                    <li className="callusli footerli">Mumbai<br/>+915689741235</li>
                    <li className="callusli footerli">Pune<br/>+915689741235</li>
                    <li className="callusli footerli">Bangalore<br/>+915689741235</li>
                </ul>
            </div>
            <div className="footercompanycontainer">
            <ul className="footercompanyul footerul">
                    <li className='footerheader footerli'>Company:</li>
                    <li className="footercompanyli footerli"><Link className='FooterLink' to={'/'}>Home</Link></li>
                    <li className="footercompanyli footerli"><Link className='FooterLink' to={'/services'}>service</Link></li>
                    <li className="footercompanyli footerli"><Link className='FooterLink' to={'/review'}>Review</Link></li>
                    <li className="footercompanyli footerli"><Link className='FooterLink' to={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
            <div className="footerfollowusContainer">
                <ul className="footerfollowusul footerul">
                    <li className='footerheader footerli'>Follow us:</li>
                    <li className="footerfollowusli footerli">Thread</li>
                    <li className="footerfollowusli footerli">Twitter</li>
                    <li className="footerfollowusli footerli">Instagram</li>
                    <li className="footerfollowusli footerli">Facebook</li>
                    <li className="footerfollowusli footerli">youtube</li>
                    <li className="footerfollowusli footerli">LinkedIn</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footermainlower">
            <p>© Copyright inc</p>
        </div>
      </div>
    </>
  );
}

export default Foote;
