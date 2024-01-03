import React from 'react';
import './style.css';

const Header = () => {
    
    return(
        <div className='header'>
            <ul className="nav">
                <li> <a href="Jojo_page%20external%20css.html" className="active_page"> Home </a> </li>
                <li id="aboutUs"> <a href="jojo_page_about_us.html"> About us </a> </li>
            </ul>
        </div>
    )
}

export default Header;
