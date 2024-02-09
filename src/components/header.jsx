import React from "react";
import Header from "../css/header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

function Headerjs() {
  return (
    <>
      <div className="headerdesign">
        <img className="forimage" src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-tumb.jpg" alt="" />
        <div>
        <input className="searcharea" type="text" placeholder="Search Your Products" />
        <SearchIcon className="searchicondesign"/>
        </div>
        <button className="btn"> <Link to='/Signin'>signin</Link> </button>

        <h4>
        <Badge color="secondary" badgeContent={0} showZero>
        <AddShoppingCartIcon/>
      </Badge>cart</h4>
    
        
        <PersonPinIcon/>
        
      </div>
    </>
  );
}
export default Headerjs;
