import React, { Component } from "react";
// import * as productsService from "../../services/productsService";
import PropTypes from "prop-types";
import style from "./Products.module.css";

//redux stuff
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsActions";

import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class Products extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: []
  //   };
  // }

  // componentDidMount = () => {
  //   productsService
  //     .getAll()
  //     .then(this.getAllSuccess)
  //     .catch(this.getAllError);
  // };

  // getAllSuccess = data => {
  //   console.log(data);
  //   this.setState({
  //     products: data.dataResponse
  //   });
  // };

  // getAllError = error => {
  //   console.log(error);
  // };

  componentWillMount() {
    this.props.getProducts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct) {
      this.props.products.unshift(nextProps.newProduct);
    }
  }

  render() {
    const allProducts = this.props.products.map(product => (
      <div className="col-md-3" key={product.id}>
        <div className="card">
          <img
            maxWidth="100%"
            className={style.image}
            src={product.image}
            alt="Product"
          />{" "}
          <div className="card-body text-center">
            <h3 className="font-normal text-center">{product.name}</h3>
            <h4 className="m-b-0 m-t-10 text-muted text-center">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(product.price)}
            </h4>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <h1>Products</h1>
        <div className="row">{allProducts}</div>
      </div>
    );
  }
}

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  newProduct: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.products.items,
  newProduct: state.products.item
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
