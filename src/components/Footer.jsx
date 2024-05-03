import React from "react";
import logo from '../images/Logo.svg'

export default function Footer(props) {

   return (
      <footer>
         <section>
            <div className="company-info">
               <img src={logo} alt="Little Lemon Logo" />
               <p>We are a family Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="">
               <h3>Important Links</h3>
               <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Menu</a></li>
                  <li><a href="/">Reservations</a></li>
                  <li><a href="/">Order Online</a></li>
                  <li><a href="/">Login</a></li>
               </ul>
            </div>
            <div>
               <h3>Contact</h3>
               <ul>
                  <li>Address: <br />123 Towncity, USA</li>
                  <li>Phone: <br />++ 0123 456 769</li>
                  <li>Email: <br />little@lemon.com</li>
               </ul>
            </div>
            <div>
               <h3>Social Media</h3>
               <ul>
                  <li><a href="/">Facebook</a></li>
                  <li><a href="/">Instagram</a></li>
                  <li><a href="/">Twitter</a></li>
               </ul>
            </div>
         </section>
      </footer>
   )
}