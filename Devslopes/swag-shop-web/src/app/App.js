import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

// Services
import HttpService from "../services/http-service";

// Components
import Product from "../product/product";
import WishList from "../wishlist/wishlist";

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
	
	this.state = {products: []};

    // Bind fuctions
    this.loadData = this.loadData.bind(this);
	this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
	var self = this;
    http.getProducts().then(data => {
      self.setState({products: data});
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product product={product} />
      </div>
	);

	return (list);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Welcome to the Swag Shop
          </h2>
        </header>

		<div className="container-fluid App-main">
			<div className="row">
				<div className="col-sm-8">
          <div className="row">
            {this.productList()}
          </div>
				</div>
				<div className="col-sm-4">
					<WishList />
				</div>
			</div>
		</div>
      </div>
    );
  }
}

export default App;
