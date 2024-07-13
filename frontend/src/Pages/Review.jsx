// import { useLocation } from "react-router-dom";
import Foote from "../components/Foote";
import Navbar from "../components/Navbar";
import StarRating from "../components/StarRating.jsx";
import "./Review.css";
import { useDispatch } from "react-redux";
import { changeAuthTrue } from "../Features/Counter/CounterSlice.js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Review = () => {
  const [auth,setAuth] = useState(false)
  const [input, setinput] = useState({
    content: "",
    rating: "",
  });
  const [review, setReview] = useState([]);
  
  const generateToast = (toastdata) => {
    toast.error(`${toastdata}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  // const location = useLocation();
  const dispatch = useDispatch();
  // const check = useSelector((state) => state.counter.auth)
  // dispatch(changeAuthTrue({ authe: check }));
  // console.log("from locatioon :",location.state.auth,"  from redux :",check)
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
          const res = await axios.get(`/api/v1/users/home`);
          if (res.data.status === 202) {
              setAuth(true)
              dispatch(changeAuthTrue({ authe: true }));
              
          }
      } catch (error) {
         
          console.error("login time error", error);
          setAuth(false);
          dispatch(changeAuthTrue(false))
      }
  };

  fetchData(); 


    (async()=>{
      try {
        const revres = await axios.get(`/api/v1/users/readReview`);
        if (revres.status === 202) {
          console.log("successfully read data");
        }
        console.log("data is:",revres.data);
        setReview(revres.data.reverse())
  
      } catch (error) {
        console.log("reviewError is:", error);
        if (error.response.status === 401)
          generateToast("Try Again After Some Time");
      }
     })()
  
    }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { content, rating } = input;

    try {
      const revres = await axios.post(`/api/v1/users/writereview`, {
        content,
        rating,
      });
      if (revres.status === 202) {
        toast.success(`Review Submitted`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }
      setReview(revres.data.reverse())
    } catch (error) {
      console.log("reviewError is:", error);
      if (error.response.status === 405 || error.response.status === 406 || error.response.status===401)
        generateToast("Try Again After Some Time");
      else if(error.response.status===400){
        generateToast("Filled the feilds")
      }
    }
  };




  useEffect(() => {
    console.log("review is", review);
  }, [review]);

  const handleChange = (e) => {
    let rating = parseInt(e.target.value);
    if(rating>5){
      generateToast(`maximum is 5`)
      e.target.value = 5
    }else if(rating<0){
      generateToast(`manimum is 0`)
      e.target.value = 0
    }
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      {auth ? (
        <>
        <Navbar />
        <div className="reviewmaincontainer">
          <h3>write a review</h3>
          <ToastContainer />
          <div className="writereviewcontainer">
            <form className="reviewform">
              <textarea
              placeholder="write a review"
                className="reviewTextarea"
                name="content"
                id=""
                cols="30"
                rows="10"
                value={input.content}
                onChange={handleChange}
              ></textarea>
              <input
                type="number"
                className="reviewrating"
                name="rating"
                value={input.rating}
                onChange={handleChange}
                max={'5'}
              />
              <button className="reviewbutton" onClick={handleSubmit}>
                submit
              </button>
            </form>
            <hr />
          </div>
          
          <div className="readreviewcontainer">
            {
              
              review.map((item,index)=>(
                <div key={index} className="readreviewinnercontainer">
                <div className="readreviewusernsme">{item.userdetails.username}</div>
                <StarRating rating = {parseFloat(item.rating)}/>
                <div className="readrevirecontent">
                  {item.content}
                </div>
              </div>
              ))
            }
          </div>
          <Foote />
        </div>
        </>
      ) : (
        <div className="reviewmaincontainer">
          <Navbar />
          <div className="loginreviewcontainer"><p>Login To Write Review</p> <hr /></div>
          
          <div className="readreviewcontainer">
            {
              
              review.map((item,index)=>(
                <div key={index} className="readreviewinnercontainer">
                <div className="readreviewusernsme">{item.userdetails.username}</div>
                <StarRating rating = {parseFloat(item.rating)}/>
                <div className="readrevirecontent">
                  {item.content}
                </div>
              </div>
              ))
            }
          </div>
          <Foote />
        </div>
      )}
    </>
  );
};

export default Review;
