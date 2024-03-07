import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Topcontentforallpagestyle from '../../css/Topcontentforallpagestyle.css'

function TodaysDeals() {
  const [todaysdeals,settodaysdeals] = useState([])

  useEffect(()=>{
    async function todaysdeals(){
     const todaydealsdata =  await axios.get('http://localhost:4000/api/todaydeals')
     settodaysdeals(todaydealsdata.data)
      
    }
    todaysdeals();

  },[])
  return (
    <div>
        <h5 className='todaysdeals'>today's best deal for u </h5>
        {
          todaysdeals.map(({model,image,year,processor,ram,storage,color,price})=>{
            return  <div className="mobilebackend">
            <div>
              <img className='image' src={image} alt="" />
            </div>
            <div className='dataaboutmobile'>
              <h6>model - {model}</h6>
              <h6>year - {year}</h6>
              <h6>processor - {processor}</h6>
              <h6>ram - {ram}</h6>
              <h6>storage - {storage}</h6>
              <h6>color -{color}</h6>
              <h6>price - {price}</h6>
            </div>
            <button className='buttondesign'> add to cart</button>
          </div>
          })

        }
      
    </div>
  )
}

export default TodaysDeals
