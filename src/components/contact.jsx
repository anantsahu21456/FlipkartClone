import React from 'react'
import Contactstyle from '../css/Contactstyle.css'

function Contact() {
    return (
        <div>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995696.2558027455!2d77.39328863937317!3d12.879501156756042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691953594405!5m2!1sen!2sin"></iframe>

            </div>
            <div className="portfolio">
                <div className="portfolio-loc">
                    <div className="loc1">
                        <a><span>location:</span> <br /> BTM Banglore, 560001</a>
                    </div>
                    <div class="loc1">
                        <a><span>email:</span><br />flip1999@gmail.com</a>
                    </div>
                    <div class="loc1">
                        <a><span>call:</span><br />+123456789</a>
                    </div>


                </div>
                <div className="portfolio-loc2">
                    <input type="text" placeholder="your name" class="it" required />
                    <input type="email" placeholder="your email" class="it" required />
                    <input type="text" placeholder="subject" class="it1"/ >
                        <input type="text" placeholder="message" class="it2"/>
                            <button className="bt">send message</button>
                        </div>

                    </div>

                </div>
                )
}

                export default Contact
