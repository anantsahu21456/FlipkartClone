import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Mobilechildcomponent from '../mobilechildcomponent';
import Mobilestyle from '../../css/Mobilestyle.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Mobiles() {

  let [mobile, setmobile] = useState([])

  useEffect(() => {
    async function Mobile() {
      let mobiledata = await axios.get('http://localhost:4000/api/mobile')
      console.log(mobiledata.data)
      setmobile(mobiledata.data)
    }
    Mobile()
  }, []);
  return (
    <div>
      <h5 className='prime'>some content based on mobile</h5>
      {mobile.map(({ brand, image, model, color, display_size, RAM, storage, main_camera_resolution, front_camera_resolution, battery_capacity, price }) => (
        <div key={model} className="mobilebackend">
          <div>
          <img className='image' src={image} alt="" />
          </div>
          
         <div className='dataaboutmobile'>
          <h6>brand - {brand}</h6> <br />
          <h6>model - {model}</h6><br />
          <h6>color - {color}</h6><br />
          <h6>display_size - {display_size}</h6><br />
          <h6>RAM - {RAM}</h6><br />
          </div> <br />

          <div className='dataaboutmobile'>
          <h6>storage - {storage}</h6><br />
          <h6>main_camera_resolution - {main_camera_resolution}</h6><br />
          <h6>front_camera_resolution - {front_camera_resolution}</h6><br />
          <h6>battery_capacity - {battery_capacity}</h6><br />
          <h6>price - {price}</h6><br />

          </div>
         
       <button className='buttondesign'> add to cart</button>
       
         </div>
          
      ))}

      <div className='mobilecontainer'>
        <div className='divforphone'>
          <Link to='mobilechildcomponent'>
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSi5CeAOSjrdt08pfeqSQEEMLEDrFoYClUmXYMS0v5O87KF0S3XIhH9FH-O6_mhmBYY9A39s5KDf-wcaXtNSBjQVkzvg4-JT-yKfehcHVETk20ez_6N0GioUwVBdS-etDrBjO_PvmpO&usqp=CAc" alt="" />
            <h3>Rs69,999</h3>
            <p>onepluse 12 series</p>
          </Link>
          <Outlet />
          <p>check on flipkart official web.👉, <a href="https://www.flipkart.com/search?q=mobiles%20on%20onepluse&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"> click here</a>    </p>
        </div>

        <div className='divforphone'>
          <Link to=''>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwejUF2KwAym62hnpVznsg7OTwpzygpDNTLMdqEkqJt4HtYZ0AQ2-rdCXoIo1xIyG1Ic&usqp=CAU" alt="" />
            <h3>Rs79,999</h3>
          </Link>
        </div>

        <div className='divforphone'>
          <Link to=''>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDVvWBqhDlra5ftep0W4Oiyy0u2sn4TWHacKEQbr-eeYbLQoXS__Tq_IhA4QRuMYbeNySBxBVti2BPguFQv68lB9FukjOHCYi-13T0Iuh_Z5lfiznJ3PqrckQdMOd4jaiAzHMJOw&usqp=CAc" alt="" />
            <h3>Rs89,999</h3>
          </Link>
        </div>

        <div className='divforphone'>
          <Link to=''>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRvRNnMrYCmqIu5c9g4vkmdDvkzzjB1XMoIZ4xHjA3uRxM5j2wJwI_cl7p4VHTPWp0xR2rKjYacgjpaLKlw41qtPKI3wSklcN5hKE0Dpai2zL0VRTa7UGnoCQzCeiBN0EV0qkhBw&usqp=CAc" alt="" />
            <h3>Rs39,999</h3>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Mobiles
