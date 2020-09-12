import React from 'react';
import fbLogo from '../icons/facebook 2.svg';
import twitterLogo from '../icons/twitter 2.svg';
import youtubeLogo from '../icons/youtube.svg';
import redditLogo from '../icons/reddit.svg';


function Footer() {
    return (
        <footer>
            <div className="social-media">
            <a href="https://facebook.com"><div className="social-media-link"><img src={fbLogo} alt="facebook"/></div></a>
            <a href="https://twitter.com"><div className="social-media-link"><img src={twitterLogo} alt="twitter"/></div></a>
            <a href="https://youtube.com"><div className="social-media-link"><img src={youtubeLogo} alt="youtube"/></div></a>
            <a href="https://reddit.com"><div className="social-media-link"><img src={redditLogo} alt="reddit"/></div></a>
            </div>
        </footer>
    )
}

export default Footer;
