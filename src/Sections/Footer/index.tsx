import React from 'react';
import './style.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className="spacing"><br></br></div>
            <div className="column">
                <h3 className="nav_text"> Informational Links </h3>
                <p> <a href="The_team.html" className="nav_text"> Team </a> </p>
                <p> <a href="FAQ.html" className="nav_text"> FAQ? </a> </p>
                <p> <a href="Contact_us.html" className="nav_text"> Contact</a> </p>
            </div>
            <div className="column">
                <h3 className="nav_text"> Project links </h3>
                <p> <a href="#gitproj" className="nav_text"> Git </a> </p>
            </div> 
            <div className="column">
                <h3 className="nav_text"> Resource links </h3>
                <p> <a href="https://jojowiki.com/JoJo_Wiki" className="nav_text">Jojo's bizarre encyclopedia</a> </p>
                <p> <a href="https://jojo.fandom.com/wiki/Main_Page" className="nav_text"> Jojo's bizarre wiki (fandom) </a> </p>
                <p> <a href="https://www.reddit.com/r/StardustCrusaders/" className="nav_text">Jojo's bizarre adventure subreddit </a> </p>
            </div> 
            <div className="spacing"><br></br></div>
        </div>
    )
}

export default Footer;
