import React from 'react'
import SigninPagestyle from '../css/SigninPagestyle.css'
import { Link } from 'react-router-dom'


function SigninPage() {
  return (
    <>
    
      <div className='loginpagelogodiv'>

        <div className='fliplogo'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYetSn71FnctSuay2UjwykgBE-gxFgv484A&usqp=CAU" alt="" />
            <h4>Welcome to flip(Duniya😎)</h4>
            <p>Ab har wish hogi poori 🫰</p>
        </div>
        

        <div className='logincontent'>
            <div className='topcontent'>
            <h5>login here </h5>
            <p>Get access to your Order,Wishlist and Recommendation</p>
            </div>
            
            <form action="">
            <div className='inputcontent'>
            <label htmlFor="">Enter Email/Mobile number</label> <br />
            <input  type="text"  placeholder='+917225085093 / anant@gmail.com' /><br />
            <label htmlFor="">Enter Password</label> <br />
            <input type="password" placeholder='************' />
         </div>

         <div className='buttoncontent'>
            <button type="submit"> Login </button>
            <button> <Link to='/SignUp'>create account</Link></button>
         </div>
            </form>
         
            
        </div>
      </div>
    </>
  )
}

export default SigninPage
