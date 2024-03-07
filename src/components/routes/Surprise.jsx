import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tharstyle from '../../css/Tharstyle.css'
import Mobilestyle from '../../css/Mobilestyle.css'

function Surprise() {
const [surprice,setsurprice] = useState([])

useEffect(()=>{
  async function surprice(){
    const surpricedata = await axios.get('http://localhost:4000/api/surprise')
    setsurprice(surpricedata.data)
    console.log(surpricedata);
  }
  surprice();
},[])

  return (
    <div>
      <h5 className='surprise'>welcome guys</h5>
      { surprice.map(({image,model,year,engine,transmission,seating_capacity,fuel_type,color_options,price})=>{
        return <div className='thar'>
          <div>
            <img className='tharimg' src={image} alt="" />
          </div>

          <div className='dataaboutmobile'>
          <h6> model - {model}</h6>
          <h6>year - {year}</h6>
          <h6>engine - {engine}</h6>
          <h6>transmission - {transmission}</h6>
          <h6>seating_capacity - {seating_capacity}</h6>
          <h6>fuel_type - {fuel_type}</h6>
          <h6>color_options -{color_options}</h6>
          <h6>price - {price}</h6>
          </div>
          <button className='buttondesign'> add to cart</button>
          
          
         </div>
        })
      }
    </div>
  )
}

export default Surprise

