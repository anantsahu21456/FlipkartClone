import React from "react";
import Navebar from "../css/navebar.css";
import { Link } from "react-router-dom";

function Navebarjs() {
  return (
    <>
      <div className="navebarmaindiv">
        <ul className="navebarlist">
          <li><Link className="removelinkline" to='/surprise'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xNSEyyAbvtFXyDmRnfJZd6MafrVCKejZuQ&usqp=CAU" alt="" /> Surprise</Link></li>
          <li><Link className="removelinkline" to='/Mobiles'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnw0RJPE54aU7OXr3QmxRrpQ6uBX0xanLTp_1sQRNg8-1ZTc9CdzIZfsayvR3EN8rlPAc&usqp=CAU" alt="" /> Mobiles </Link></li>
          <li><Link className="removelinkline" to='/BestSeller'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4bNgTxFKPejzfkMrua3N5PqpIjiY1OhnNA&usqp=CAU" alt="" /> BestSeller </Link></li>
          <li><Link className="removelinkline" to='/Fasion'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcsSftxVwGXElpIfWz0aM0XYCPbmatzLppA&usqp=CAU" alt="" /> Fasion </Link></li>
          <li><Link className="removelinkline" to='/Grocery'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMUZF9XnIZuC3veYqy7VvndcV3KooOMyv-g&usqp=CAU" alt="" /> Grocery </Link></li>
          <li><Link className="removelinkline" to='/Electronics'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpv5-vVC2GIMVHJMuXBbZ0eJuRjegSGDFd7w&usqp=CAU" alt="" /> Electronics </Link></li>
          <li><Link className="removelinkline" to='/Prime'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5_m1uCw9y2X7bwO5FYLJnn_RUjxgRn7qHA&usqp=CAU" alt="" /> Prime </Link></li>
          <li><Link className="removelinkline" to='/TodaysDeals'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0ezNLrN2nRI0LFmEzDE_E3E5dCnem2PoXVPrJzlUZQn_YfZzC0FqxaXjoTKHZziLcMg&usqp=CAU" alt="" /> TodaysDeals </Link> </li>
          <li><Link className="removelinkline" to='/FlipkartPay'> <img id="naveimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRiANhxyCiqYCS6sq9Q41W2SnxrO5Vsx8T-pTZgdCMc5Q50mOiMxfO2Hblmh9he0cOuL8&usqp=CAU" alt="" /> FlipkartPay </Link> </li>
        </ul>
      </div>
    </>
  );
}
export default Navebarjs;

