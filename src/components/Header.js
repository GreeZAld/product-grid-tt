import React from 'react';
import corexLogo from '../icons/CE Logo.svg';
import langLogo from '../icons/planet-earth 2.svg';
import cart from '../icons/cart.svg';

function Header(props) {

    return (
        <header className="header-wrapper">
            <img src={corexLogo} className="corex-logo" alt="logo" />

            <img src={langLogo} className="lang-logo" alt="langLogo" />
            <div className="header-toolbar">
                <div className="header-language-switcher">
                    ENG
                </div>
                <div className="cart-icon">
                    <img src={cart} className="cart" alt="checkout" />
                    <span className="cart-count">{props.count}</span>
                </div>

            </div>

        </header>
    )
}

export default Header;
