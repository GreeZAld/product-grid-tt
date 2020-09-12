import React from 'react';
import banner from '../icons/banner.svg';

function RightBar() {
    return(
        <sidebar className="banner-panel">
            <h2>News</h2>
            <img src={banner} alt="banner"/>
        </sidebar>
    )
}

export default RightBar;
