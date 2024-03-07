import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Mobilestyle from '../../css/Mobilestyle.css'

function Customer() {
const [grocery,setgrocery]=  useState([])

useEffect(()=>
{
  async function grocery(){
    const  grocerydata= await axios.get('http://localhost:4000/api/grocery')
    setgrocery(grocerydata.data)

  }
  grocery();
 
},[])

  return (
    <div>
        <h5 className='grocery'>customer can check this also ,this page is mainly for customer</h5> 
{grocery.map(({ name, image, description, category, quantity, unit, price_per_unit, currency}) => (
        <div key={name} className="mobilebackend">
          <div>
          <img className='image' src={image} alt="" />
          </div>
          
         <div className='dataaboutmobile'>
          <h6>description - {description}</h6> <br />
          <h6>category - {category}</h6><br />
          <h6>quantity - {quantity}</h6><br />
          <h6>unit - {unit}</h6><br />
          <h6>price_per_unit - {price_per_unit}</h6><br />
          <h6>currency - {currency}</h6><br />
          </div> <br />
         
       <button className='buttondesign'> add to cart</button>
       
         </div>
          
      ))}
    </div>
  )
}

export default Customer
