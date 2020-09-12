import React from 'react';
import data from '../data/data.json';
import image from '../product.png';
import star from '../icons/star.svg';
import controls from '../icons/controls.svg';
import rex from '../icons/rex.svg';
import cart from '../icons/cart.svg';

function MobileView(props) {

    var arr = data.map((item) => {
        return (
            <div className="card-wrapper" onClick={props.handleClick}>
                <div className="card-title">
                    <div>
                        {item.manufacturer + ' '}
                        {item.model}
                        <img className="card-title-icon" src={item.starred === true ? star : null} alt="star" />
                    </div>
                    <div>
                        {item.hash}
                    </div>
                </div>

                <img className="card-image" src={image} alt="pict" />
                <div className="card-price">
                    {item.price}
                </div>
            </div>
        )
    })

    return (
        <div className="product-list-mobile">
            <div className="mobile-header">
                <img src={controls} alt="controls" />
                <img src={rex} alt="logo" />
                <div className="cart-icon">
                    <img src={cart} className="cart" alt="checkout" />
                    <span className="cart-count">{props.count}</span>
                </div>
            </div>
            <div>
                {arr}
            </div>
        </div>
    )
}

export default MobileView;
