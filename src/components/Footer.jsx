import React from 'react'
import Footerstyle from '../css/Footerstyle.css'

function Footer() {
  return (
    <div>
        <section className="footer">
        <h1>flipkart</h1>
        <p>
        Flipkart Plus. A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero ...
        </p>
        <div className="icon">
            {/* <a> <i class="fa fa-twitter-square" aria-hidden="true"></i> </a>
           
            <a> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
            <a> <i class="fa fa-instagram" aria-hidden="true"></i> </a>
            <a> <i class="fa fa-google-plus" aria-hidden="true"></i> </a>
            <a> <i class="fa fa-linkedin-square" aria-hidden="true"></i></a> */}

            <h3><a href="./contact.jsx">contact us</a></h3>

        </div>

        <p>© Copyright  <span>flipkart</span>. All Rights Reserved</p>
        <p>Designed by </p>
        <a className="ancor" href="bootstrapmade">flipkart</a>
     </section>
      
    </div>
  )
}

export default Footer
