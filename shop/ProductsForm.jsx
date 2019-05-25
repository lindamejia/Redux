import React, { Component } from "react";
import * as productsService from "../../services/productsService";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProduct } from "../../actions/productsActions";

class ProductsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      price: "",
      quantity: "",
      size: "",
      color: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newProduct = {
      image: this.state.image,
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      size: this.state.size,
      color: this.state.color
    };
    // productsService
    //   .addProduct(newProduct)
    //   .then(this.addProductSuccess)
    //   .catch(this.addProductError);

    //REDUX: THIS IS WHERE WE CALL ACTION
    this.props.createProduct(newProduct);
  };

  //   addProductSuccess = payload => {
  //     console.log("Product has been added:", payload);
  //   };

  //   addProductError = error => {
  //     console.log(error);
  //   };

  render() {
    return (
      <div>
        <h1>Add Product</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Image Url: </label>
            <br />
            <input
              type="text"
              name="image"
              onChange={this.onChange}
              value={this.state.image}
            />
          </div>
          <br />
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label>Price: </label>
            <br />
            <input
              type="text"
              name="price"
              onChange={this.onChange}
              value={this.state.price}
            />
          </div>
          <br />
          <div>
            <label>Total Inventory: </label>
            <br />
            <input
              type="text"
              name="quantity"
              onChange={this.onChange}
              value={this.state.quantity}
            />
          </div>
          <br />
          <div>
            <label>Size: </label>
            <br />
            <input
              type="text"
              name="size"
              onChange={this.onChange}
              value={this.state.size}
            />
          </div>
          <br />
          <div>
            <label>Color: </label>
            <br />
            <input
              type="text"
              name="color"
              onChange={this.onChange}
              value={this.state.color}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ProductsForm.propTypes = {
  createProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProduct }
)(ProductsForm);
