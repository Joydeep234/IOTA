import "./Homeservice.css";
import { Link } from "react-router-dom";
const Homeservice = () => {
  return (
    <>
      <div className="homeservicemainfinalframe">
        <h1 className="homeserviceh3">Our Services</h1>
        <div className="Homeservicemaincoontainer">
          <div className="homeserviceframes">
            <div className="homeservice hs1">
              <div className="homeservicetitleend">
                <Link to="/services" className="homeservicetitleendLink">
                  web Development{" "}
                </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <p className="homeservip">
                  At the forefront of digital innovation, our web development
                  solutions go beyond aesthetics. We specialize in crafting
                  responsive, SEO-friendly websites that not only look stunning
                  but also drive traffic and conversions. From e-commerce
                  platforms to interactive web applications, we leverage the
                  latest technologies to deliver results that exceed
                  expectations.
                </p>
                <img
                  src="src/assets/homeserviceimg/web.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
              </div>
            </div>
          </div>
          <div className="homeserviceframes">
            <div className="homeservice hs2">
              <div className="homeservicetitle">
                <Link to="/services" className="homeservicetitleendLink">
                  Mobile App Development{" "}
                </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <img
                  src="src/assets/homeserviceimg/mobile.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
                <p className="homeservip">
                  In today`s mobile-centric world, having a powerful app is
                  essential for staying ahead. Our mobile app development team
                  combines creativity with technical expertise to build custom
                  solutions tailored to your business goals. From concept to
                  launch and beyond, we`re committed to delivering apps that
                  delight users and achieve measurable success.
                </p>
              </div>
            </div>
          </div>
          <div className="homeserviceframes">
            <div className="homeservice hs1">
              <div className="homeservicetitleend">
                <Link to="/services" className="homeservicetitleendLink">
                  Graphics Designing{" "}
                </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <p className="homeservip">
                  Design is more than just visuals—its about creating
                  experiences that resonate with your audience. With a keen eye
                  for aesthetics and a deep understanding of branding, our
                  graphic design services elevate your brand identity to new
                  heights. From captivating logos to stunning marketing
                  collateral, we craft designs that leave a lasting impression
                  and drive engagement.
                </p>
                <img
                  src="src/assets/homeserviceimg/graphics.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
              </div>
            </div>
          </div>
          <div className="homeserviceframes">
            <div className="homeservice hs2">
              <div className="homeservicetitle">
                <Link to="/services" className="homeservicetitleendLink">
                  Photography{" "}
                </Link>
              </div>
              <div className="homeservicedetailcontainer">
                <img
                  src="src/assets/homeserviceimg/photography.jpeg"
                  alt=""
                  className="homeserviceimg"
                />
                <p className="homeservip">
                  Every moment is precious, and our photography services are
                  dedicated to preserving those memories in the most beautiful
                  way possible. Our team of talented photographers specializes
                  in capturing authentic moments and emotions, whether its a
                  grand wedding celebration or a corporate event. With an
                  emphasis on storytelling and creativity, we turn fleeting
                  moments into timeless treasures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeservice;
