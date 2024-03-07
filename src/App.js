import React from "react";
import Navebar from "./components/navebar";
import Header from "./components/header";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
// import All from "./components/routes/All";
import Mobiles from "./components/routes/Mobiles";
import BestSeller from "./components/routes/BestSeller";
import Fasion from "./components/routes/Fasion";
import Grocery from "./components/routes/Grocery";
import Electronics from "./components/routes/Electronics";
import Prime from "./components/routes/Prime";
import TodaysDeals from "./components/routes/TodaysDeals";
import FlipkartPay from "./components/routes/FlipkartPay";
import Backgroundslider from "./components/Backgroundslider";
import Someproduct from "./components/Someproduct";
import Mobilechildcomponent from "./components/mobilechildcomponent";
import SigninPage from "./components/SigninPage";
import SignUp from "./components/SignUp";
import Surprise from "./components/routes/Surprise";
import Footer from "./components/Footer";
import Contact from "./components/contact";

// backend start----------------------------------->


// backend end------------------------------------->
function App() {
  return (
    <div>
       <BrowserRouter>
       <Header/>
       <Navebar/>
       <Routes>
       <Route path="/Signin" element={<SigninPage/>}></Route>
       <Route path="/SignUp" element={<SignUp/>}></Route>
       <Route path='/Surprise' element={<Surprise/>}></Route>
       <Route path='/Mobiles' element={<Mobiles/>}>
       <Route path="Mobilechildcomponent" element={<Mobilechildcomponent/>}></Route>
       </Route>
       <Route path='/BestSeller'  element={<BestSeller/>}></Route>
       <Route path='/Fasion'  element={<Fasion/>}></Route>
       <Route path='/Grocery'  element={<Grocery/>}></Route>
       <Route path='/Electronics'  element={<Electronics/>}></Route>
       <Route path='/Prime'  element={<Prime/>}></Route>
       <Route path='/TodaysDeals'  element={<TodaysDeals/>}></Route>
       <Route path='/FlipkartPay'  element={<FlipkartPay/>}></Route>
       </Routes>
       </BrowserRouter>
       <Backgroundslider/>
       <Someproduct/>
       <Contact/>
       <Footer/>
       
       
    </div>
  );
}

export default App;

// <Contact/>
    
