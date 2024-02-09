import React, { useState } from 'react';
import SignUP from '../css/SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
          
   let [userdata,setuserdata]= useState({username:"",mobilenum:"",email:"",password:""})

  let updateuserdata = ({target:{name,value}})=>
  {
    setuserdata({...userdata,[name]:value})
  }

  let submitdata=(e)=>
  {
    console.log("okay")
    e.preventDefault();
  
    let backend=async()=>{
     let result =  await axios.post("http://localhost:4000/api/formdata/addformdatas",userdata)
     console.log(result)
      console.log(userdata)
    }
    backend()
  }




  return (
    <div>
      
        <div className='signupwithdummyadd'>
        <div className='signupcontent'>
        <h3>Sign up here 👇</h3>

         <form action="" onSubmit={submitdata}>
         <label className='forlabel' htmlFor="">Your name</label> <br />
            <input className='content' type="text" placeholder='ur name' name='username' value={SignUp.username} onChange={updateuserdata} />
       
            <label className='forlabel' htmlFor="">Mobile number</label> <br />
            <input className='content' type='number' placeholder='+91**********' name='mobilenum' value={SignUp.mobilenum} onChange={updateuserdata} />
        
            <label className='forlabel' htmlFor="">Email</label> <br />
            <input className='content' type="text" placeholder=' enter ur email' name='email' value={SignUp.email} onChange={updateuserdata}/>
       
            <label className='forlabel' htmlFor="">Password</label> <br />
            <input className='content' type="password" placeholder='******'  name='password' value={SignUp.password} onChange={updateuserdata} />
        
            <button  className='content'  >  👉 click here 👈</button>
         </form>
        
       </div>
      
               <Link to='https://www.oneplus.in/'> <div className='dummyadd'>
              <h3>today top ads</h3>
              <h1>Top Selling Smartphones</h1>
              <p>Latest Technology,Best Brands </p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqK2esvVvrqlHEKlZEA1xjE9QPxHqPprC2w&usqp=CAU" alt="" />
              </div> </Link>
              


        </div>
      


    </div>
  )
}

export default SignUp
