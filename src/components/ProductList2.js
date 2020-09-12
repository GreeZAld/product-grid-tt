import React from 'react';
// import data from '../data/data.json';
import arrow from '../icons/green arrow.svg';
import star from '../icons/star.svg';

class ProductList2 extends React.Component {


    constructor() {
        super();
        this.state = { data: [], Posts: null };
    }

    componentDidMount() {
        this.renderProducts();
    }

    async renderProducts () {
        try {
            let res = await fetch("../data/data.json");
            let json = res.json();
            this.setState({ data: json });
            console.log(this.state.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    arr() {
        this.setState({
        Posts: this.state.data.map((item) => {
    return <tr id={item.id} onClick={this.props.handleClick}>{Object.values(item).filter((key) => {return typeof key != "number"}).map((value) => {
        if(value === "grows") {
            return <td><img src={arrow} alt="arrow"/></td>
        }
        else if (value === true) {
            return <td><img src={star} alt="star"/></td>
        }
        else {
            return <td>{value}</td>
        }
    })}</tr>
    })
})
}

    render () {
    return (
        <div className="product-list">
            <h2>On sale</h2>
            <table className="product-grid">
                <thead>
                    <tr className="product-grid-header">
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Release</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Hash</th>
                        <th>Algorithm</th>
                        <th>Efficiency</th>
                        <th>Profit</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody className="product-grid-body">
                    {this.state.Posts}
                </tbody>
            </table>
        </div>
    );
}
}

export default ProductList2;
