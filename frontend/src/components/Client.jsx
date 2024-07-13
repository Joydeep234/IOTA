import './Client.css'
const Client = () => {
  return (
    <>
    <div className="clientmaindivcontainer">
    <h3>Our Clients</h3>
      <div className="clientmaindiv">
        <div className="clientinnerdiv">
            <div className="clientstore">
                <img src="src/assets/homeserviceimg/cf.svg" alt="" className="clientimg" />
                <img src="src/assets/homeserviceimg/cs.svg" alt="" className="clientimg" />
                <img src="src/assets/homeserviceimg/js.svg" alt="" className="clientimg" />
                <img src="src/assets/homeserviceimg/lb.svg" alt="" className="clientimg" />
            </div>
            <div className="clientstore">
                <img src="src/assets/homeserviceimg/mb.svg" alt="" className="clientimg" />
                <img src="src/assets/homeserviceimg/pw.svg" alt="" className="clientimg" />
                <img src="src/assets/homeserviceimg/sb.svg" alt="" className="clientimg" />
                <img src="src/assets/homeserviceimg/sf.svg" alt="" className="clientimg" />
            </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Client;
