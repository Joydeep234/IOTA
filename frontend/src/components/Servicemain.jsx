import { useNavigate,Link } from "react-router-dom";
import "./Servicemain.css";
import { useSelector } from "react-redux";
const Servicemain = () => {
  const navigate = useNavigate();
  const check = useSelector((state) => state.counter.auth);
  if (!check) {
    navigate("/login");
    return null;
  }

  return (
    <div className="servicemaincontainer">
      <h1>Services and our Products</h1>
      <div className="webdev">
        <h3>Make Popular Websites with Us</h3>
        <div className="descandimg">
          <Link to={'/contact'}><h4 className="servicetitle">Portfolio Website</h4></Link>
          <img
            src="https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg"
            alt=""
            className="serviceimages"
          />
          <p className="dervicedesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            architecto molestias ratione quas nobis reprehenderit magnam.
            Deserunt magni quos accusantium ad vel maxime minus enim laudantium
            perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
            recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
            Voluptatem ducimus porro officia esse doloremque?
          </p>
        </div>
        <div className="descandimg">
          <Link to={'/contact'}><h4 className="servicetitle">Personal website</h4></Link>
          <img
            src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fab48144d00806dafcb7b33_MFB2ObiPRVBcp5K1yFHwC-McTyMDuFL_j7ZX5-NO1Y29vFTYGj0e2VC9EQnkZ4a4ykJlLhrsISBULjYngTG3N990ea5M044Jq7OzqyMdJp2UcGDxsv8dRzEhqzH5cs2ZkCUAIC3p.jpeg"
            alt=""
            className="serviceimages"
          />
          <p className="dervicedesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            architecto molestias ratione quas nobis reprehenderit magnam.
            Deserunt magni quos accusantium ad vel maxime minus enim laudantium
            perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
            recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
            Voluptatem ducimus porro officia esse doloremque?
          </p>
        </div>
        <div className="descandimg">
          <Link to={'/contact'}><h4 className="servicetitle">Portfolio</h4></Link>
          <img
            src="https://assets.materialup.com/uploads/28a542c8-abfb-48c5-9301-3efd837518d6/preview.jpg"
            alt=""
            className="serviceimages"
          />
          <p className="dervicedesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            architecto molestias ratione quas nobis reprehenderit magnam.
            Deserunt magni quos accusantium ad vel maxime minus enim laudantium
            perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
            recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
            Voluptatem ducimus porro officia esse doloremque?
          </p>
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Blogs</h4></Link>
          <img
            src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fab481468dc3220fbf640fe_czM0NtRL9uflaZOEK4nQXkPzEBDfcB5N6QKd86haMCQ7o0Tu5My4wI4GS9vyrlwbQSQs9pQ1JkAkwPtpL-cI_Z3O5ZUEd5nefrqs_7FEO8qt7X1v7JP8cXC4rhqHUMMLvavtqCd2.jpeg"
            alt=""
            className="serviceimages"
          />
          <p className="dervicedesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            architecto molestias ratione quas nobis reprehenderit magnam.
            Deserunt magni quos accusantium ad vel maxime minus enim laudantium
            perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
            recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
            Voluptatem ducimus porro officia esse doloremque?
          </p>
        </div>
        <div className="descandimg">
          <Link to={'/contact'}><h4 className="servicetitle">Bussiness Website</h4></Link>
          <img
            src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fab48134baf035c3613736b_nxFbK_2b7Q08BPGFX5VPQhoiH3UJ3SSB8rf8SHzsnOR8QMTO-uwb0NRqEBHT-FeX2nvifLyj53W-sBcLCOIZzXF03P0O4_reP1N2O-8sFj5cHfnxWi6KnTxkzQMlu1qGiC0wMJiy.jpeg"
            alt=""
            className="serviceimages"
          />
          <p className="dervicedesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            architecto molestias ratione quas nobis reprehenderit magnam.
            Deserunt magni quos accusantium ad vel maxime minus enim laudantium
            perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
            recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
            Voluptatem ducimus porro officia esse doloremque?
          </p>
        </div>
        <div className="descandimg">
          <Link to={'/contact'}><h4 className="servicetitle">Ecommerce website</h4></Link>
          <img
            src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/5fab4814b0d8da2075bb434f_oEkI9TRxZisvcANGh3ZphvVn8FEJ1ql-r3WTugFyGc5BWLztT2B4BygcEc0V20KYZc6id9BjraCyaV1zpqjE1FJfXPRmHAl3t62mb1sVGBnUF88pmW44_6u6FO4r-2ZfGxokiHbE.jpeg"
            alt=""
            className="serviceimages"
          />
          <p className="dervicedesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            architecto molestias ratione quas nobis reprehenderit magnam.
            Deserunt magni quos accusantium ad vel maxime minus enim laudantium
            perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
            recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
            Voluptatem ducimus porro officia esse doloremque?
          </p>
        </div>
      </div>

      {/* graphics designinh////////////////////// */}

      <div className="graphics">
        <h3>Graphics Designs</h3>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Web Design</h4></Link>
            <img
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/15_awesome-websites.jpg"
                alt=""
                className="serviceimages"
            />
            <p className="dervicedesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                architecto molestias ratione quas nobis reprehenderit magnam.
                Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                Voluptatem ducimus porro officia esse doloremque?
            </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">UI and UX Design</h4></Link>
            <img
                src="https://s3.amazonaws.com/creativetim_bucket/products/414/original/opt_sds_thumbnail.png?1612539858"
                alt=""
                className="serviceimages"
            />
            <p className="dervicedesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                architecto molestias ratione quas nobis reprehenderit magnam.
                Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                Voluptatem ducimus porro officia esse doloremque?
            </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Motion Graphics and Animation</h4></Link>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMTnXBa6BDtOUKQp8ZtcmjuPBxPvG0FFYNOydcYnw6g&s"
                alt=""
                className="serviceimages"
            />
            <p className="dervicedesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                architecto molestias ratione quas nobis reprehenderit magnam.
                Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                Voluptatem ducimus porro officia esse doloremque?
            </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Advertizing and Market Designing</h4></Link>
            <img
                src="https://i.pinimg.com/736x/96/e9/e7/96e9e7e32937fb46590773532a7058e1.jpg"
                alt=""
                className="serviceimages"
            />
            <p className="dervicedesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                architecto molestias ratione quas nobis reprehenderit magnam.
                Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                Voluptatem ducimus porro officia esse doloremque?
            </p>
          
        </div>
      </div>

        {/* mobile application designs start here////////////////// */}

      <div className="mobile">
        <h3>mobile applications</h3>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">native</h4></Link>
            <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*lcXPKR9v39pUicSIWX8niA.jpeg"
                alt=""
                className="serviceimages"
            />
            <p className="dervicedesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                architecto molestias ratione quas nobis reprehenderit magnam.
                Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                Voluptatem ducimus porro officia esse doloremque?
            </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Cross Platform</h4></Link>
            <img
                src="https://www.smartsight.in/wp-content/uploads/2019/09/cross-platform.jpg"
                alt=""
                className="serviceimages"
            />
            <p className="dervicedesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                architecto molestias ratione quas nobis reprehenderit magnam.
                Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                Voluptatem ducimus porro officia esse doloremque?
            </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">hybrid</h4></Link>
            <img
                src="https://www.sgstechnologies.net/sites/default/files/2021-04/hybrid.jpg"
                alt=""
                className="serviceimages"
            />
            <p className="dervicedesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                architecto molestias ratione quas nobis reprehenderit magnam.
                Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                Voluptatem ducimus porro officia esse doloremque?
            </p>
          
        </div>
      </div>

      <div className="photo">
        <h3>PhotoGrapgy</h3>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Landscape</h4></Link>
            
            <img
                src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                alt=""
                className="serviceimages"
            />
                <p className="dervicedesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    architecto molestias ratione quas nobis reprehenderit magnam.
                    Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                    perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                    recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                    Voluptatem ducimus porro officia esse doloremque?
                </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Wedding</h4></Link>            
            <img
                src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/wedding-photography-couple-shoot.jpg"
                alt=""
                className="serviceimages"
            />
                <p className="dervicedesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    architecto molestias ratione quas nobis reprehenderit magnam.
                    Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                    perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                    recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                    Voluptatem ducimus porro officia esse doloremque?
                </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Fashion</h4></Link>
            <img
                src="https://s9p4a7f6.rocketcdn.me/wp-content/uploads/2022/11/5.-Silk-Sarees-1.jpg"
                alt=""
                className="serviceimages"
            />
                <p className="dervicedesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    architecto molestias ratione quas nobis reprehenderit magnam.
                    Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                    perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                    recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                    Voluptatem ducimus porro officia esse doloremque?
                </p>
          
        </div>
        <div className="descandimg">
            <Link to={'/contact'}><h4 className="servicetitle">Documentry</h4></Link>
            <img
                src="https://s9p4a7f6.rocketcdn.me/wp-content/uploads/2022/12/3.-Life-in-Old-Fort-Delhi-India-.jpg"
                alt=""
                className="serviceimages"
            />
                <p className="dervicedesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    architecto molestias ratione quas nobis reprehenderit magnam.
                    Deserunt magni quos accusantium ad vel maxime minus enim laudantium
                    perspiciatis, a, reprehenderit aperiam autem tempore sapiente veniam
                    recusandae assumenda ex quam, ipsam nostrum quis ea beatae quo.
                    Voluptatem ducimus porro officia esse doloremque?
                </p>
          
        </div>
      </div>
    </div>
  );
};

export default Servicemain;
