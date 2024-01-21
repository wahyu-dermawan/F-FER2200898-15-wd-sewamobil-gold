import React from "react";
import './footer.css'
import iconFacebook from './icon_facebook.png'
import iconInstagram from './icon_instagram.png'
import iconMail from './icon_mail.png'
import iconTwitch from './icon_twitch.png'
import iconTwitter from './icon_twitter.png'

const Footer=()=>{
    return (
    <div className="container">
    <div className="footer">
    <div className="footer-section bold">
      <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
      <div>binarcarrental@gmail.com</div>
      <div>081-233-334-808</div>
    </div>
    <div className="footer-section navigation">
      <div>Our services</div>
      <div>Why Us</div>
      <div>Testimonial</div>
      <div>FAQ</div>
    </div>
    <div className="footer-section bold">
      <div>Connect with us</div>
      <div className="social-media">
        <img src={iconFacebook} alt="icon-facebook" />
        <img src={iconInstagram} alt="icon-instagram" />
        <img src={iconTwitter} alt="icon-twitter" />
        <img src={iconMail} alt="icon-mail" />
        <img src={iconTwitch} alt="icon-twitch" />
      </div>
    </div>
    <div className="footer-section bold">
      <div>Copyright Binar 2022</div>
      <div className="block"></div>
    </div>
  </div>
  </div>
);
}

export default Footer;