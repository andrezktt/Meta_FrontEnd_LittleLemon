import React from "react";
import { Link } from 'react-router-dom'
import bannerImg from '../images/restaurantfood.jpg'

export default function Header(props) {

   return (
      <header className="header">
         <section>
            {/* Banner texts */}
            <div className="banner">
               <h2>Little Lemon</h2>
               <h3>Chicago</h3>
               <p>We are a family Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
               <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>

            {/* Banner Image */}
            <div className="banner-img">
               <img src={bannerImg} alt="" />
            </div>
         </section>
      </header>
   )
}