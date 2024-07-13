import { useNavigate } from 'react-router-dom';
import './Adminhome.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminHome = () => {
    const [contacts, setContacts] = useState([]);
    const [auth,setAuth] = useState(false)

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

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`/api/v1/users/adminhome`);
                    if (res.data.status === 202) {
                        setAuth(true)
                    }
                } catch (error) {
                   
                    console.error("login time error", error);
                    setAuth(false);
                }
            };
    
            fetchData(); 
        },[]);    
    useEffect(()=>{
        (async()=>{
            try {
              const res = await axios.get(`/api/v1/users/admin/contact`);
              if (res.status === 202) {
                console.log("successfully read data");
              }
              console.log("data is:",res.data);
              console.log("data is:",res.data[0]);
              setContacts(res.data.reverse())
        
            } catch (error) {
              console.log("reviewError is:", error);
              if (error.response.status === 401)
                generateToast("Try Again After Some Time");
            }
           })()
    },[])

    const navigate = useNavigate()
    const handlelogout = async ()=>{
        try {
            const res = await axios.get(`/api/v1/users/admin/logout`)
            if(res.status === 200)
                {
                    navigate('/')
                }
        } catch (error) {
            console.log("logged out error",error);
        }
    }

    if(!auth){
        navigate('/adminlogin')
    }
    if (contacts.length === 0) {
        return <div>Loading...</div>;
      }
  return (
    <>
      <div className="adminhomemaincontainer">
        <div className="logoutadmin">
            <button className="logoutbuttonadmin" onClick={handlelogout}>logout</button>
        </div>
        <h3 className='admininnermaincontainerh3'>All User Contacts</h3>
        <div className="admininnermaincontainer">
        
        <div className="displaycontacts">
            {
                contacts.map( (item,index)=>(
                <div key={index} className="contactsreadreviewinnercontainer">
                        <div className="contactsreadinnercontainertop">
                            <div className="readreviewusernsme common">{item.userdetails.username}</div>
                            <div className="readreviewemail common">{item.userdetails.email}</div>
                            <div className="readreviewphone common">{item.userdetails.phone}</div>
                        </div>
                        <div className="readreviewrating common">{item.catagory}</div>
                        <div className="readrevirecontent common">
                        {item.message}
                        </div>
              </div>
                ))
            }
        </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default AdminHome;
