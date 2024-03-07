import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Electronics() {
  const [electronics, setelectronics] = useState([])

  useEffect(() => {
    async function electronics() {
      const electronicsdata = await axios.get('http://localhost:4000/api/electronics')
      setelectronics(electronicsdata.data)

    }
    electronics();
  },[])

  return (
    <div>
      <h5 className='prime'>here u can get electronics items</h5>
      {
        electronics.map(({name,image,description,category,quantity,unit,price_per_unit,currency}) => {
          return  <div className="mobilebackend">
          <div>
            <img className='image' src={image} alt="" />
          </div>
          <div className='dataaboutmobile'>
            <h6>name - {name}</h6>
            <h6>description - {description}</h6>
            <h6>category - {category}</h6>
            <h6>quantity - {quantity}</h6>
            <h6>unit - {unit}</h6>
            <h6>price_per_unit -{price_per_unit}</h6>
            <h6>currency - {currency}</h6>
          </div>
          <button className='buttondesign'> add to cart</button>
        </div>
        })
      }

    </div>
  )
}

export default Electronics
