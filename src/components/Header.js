import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <header className="showcase">
    <div className="showcase-top">
        <img src="Images/logo.png" alt="Netflix Logo"/>
        <NavLink to="#" className="btn btn-rounded">Sign In</NavLink>
    </div>
    <div className="showcase-content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>All of Netflix, starting at just ₹ 199.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <input type="email" name="email" id="mail" placeholder="Email address"/>
        <NavLink to='#'   className="btn btn-lg">GET STARTED</NavLink>
    </div>
</header>
  )
}

export default Header
