import { useState } from 'react';
import './Contacts.css'
import axios from 'axios';
import {  useLocation, useNavigate } from 'react-router-dom';
import Foote from '../components/Foote.jsx'

const Contacts = () => {
  const location = useLocation();
  const serviceData = location.state || ""
  console.log("service-data",serviceData);
  const navugate = useNavigate()
  const [sertype,setSerType] = useState({
    catagory:"",
    message:""
  })

const handlechange = (e)=>{
 setSerType({...sertype,[e.target.name]:e.target.value})
}
const handleSubmit = async (e)=>{
  e.preventDefault();
const {catagory,message} = sertype

  try {
    const res = await axios.post(`/api/v1/users/contact`,{
      catagory,
      message
    })

    if(res.status===202){
      alert('successfully submit! our teammate will reach you soon')
      navugate('/')
    }
  } catch (error) {
    console.log("error at contact is:",error);
  }
}

  return (
    <>
      <div className="contactmiancontainer">
        <h3></h3>
        <div className="innercontsiner">
          <form  className="contactform" onSubmit={handleSubmit}>
            <input placeholder='catagoy' type="text" className="contacttype" name='catagory' onChange={handlechange} value={serviceData.data||sertype.catagory}/>
            <textarea placeholder='Description' name="message" type='text' id="" cols="30" rows="10" className='contactDesc' onChange={handlechange} value={sertype.message} ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <Foote/>
      </div>
    </>
  );
}

export default Contacts;
