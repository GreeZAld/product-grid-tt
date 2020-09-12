import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import ProductList from './ProductList';


function MainWrapper(props) {
    return(
        <main className="main-wrapper">
            <LeftBar />
            <ProductList handleClick={props.handleClick}/>
            <RightBar />
        </main>
    )
}

export default MainWrapper;
