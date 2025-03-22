import React from 'react';
import { Link } from "react-router-dom";
import './index.scss'
import Video from '../video/video';
function Header() {
  return (
    <div className="header-main-container">
        <nav className='navbar'>
        <div>
          <Link to ='/'>Home</Link>
        </div>
        <div>
        <Link to ='/about'>About</Link>
        </div>
        <div>
        <Link to ='/contact'>Contact</Link>
        </div>
        </nav>
    </div>
  );
}

export default Header;
