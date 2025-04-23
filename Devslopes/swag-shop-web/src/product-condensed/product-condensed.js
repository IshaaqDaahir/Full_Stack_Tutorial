import React, { Component } from "react";
import "./product-condensed.css";

// Components
import DataService from "../services/data-service";

let ds = new DataService();

class ProductCondensed extends Component {

    constructor(props) {
        super(props);

        // Bind functions
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }

    render() {
        return(
            <li className="list-group-item pc-condensed">
                <a href="#" className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
                <p className="d-inline-block">{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ProductCondensed;