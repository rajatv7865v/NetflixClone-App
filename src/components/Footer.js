import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
    <p>Questions? Call 000-000-000-0000</p>
    <div className="footer-cols">
        <ul>
            <li><NavLink to="/">FAQ</NavLink></li>
            <li><NavLink to="/">Investor Relations</NavLink></li>
            <li><NavLink to="/">Privacy</NavLink></li>
            <li><NavLink to="/">Speed Test</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to="/">Help Centre</NavLink></li>
            <li><NavLink to="/">Jobs</NavLink></li>
            <li><NavLink to="/">Cookie Preferences</NavLink></li>
            <li><NavLink to="/">Watch for Free</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to="/">Account</NavLink></li>
            <li><NavLink to="/">Ways to Watch</NavLink></li>
            <li><NavLink to="/">Corporate Information</NavLink></li>
            <li><NavLink to="/">Legal Notices</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to="/">Media Centre</NavLink></li>
            <li><NavLink to="/">Terms of Use</NavLink></li>
            <li><NavLink to="/">Contact Us</NavLink></li>
            <li><NavLink to="/">Netflix Originals</NavLink></li>
        </ul>
    </div>
</footer>
  )
}

export default Footer
