import React from 'react';

function LeftBar() {
    return (
        <sidebar className="sort-panel">
            <h2>Sort by</h2>
            <div className="filters-wrapper">
                <button className="sort-panel-button">By manufacturer</button>
                <button className="sort-panel-button">By minimum price</button>
                <button className="sort-panel-button">By maximum price</button>
            </div>
        </sidebar>
    )
}

export default LeftBar;
