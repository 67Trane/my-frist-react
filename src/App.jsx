import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="product-container">
            <Product title="Karotten" img="carrots.jpg" description="Füge karoten zu dienem warenkorb hinzu" />
            <Product title="Gurken" img="gurken.jpg" description="Füge gurken zu dienem warenkorb hinzu" />
            <Product title="Apfel" img="apfel.jpg" description="Füge äpfel zu dienem warenkorb hinzu" />
            <Product title="Birnen" img="birnen.jpg" description="Füge birnen zu dienem warenkorb hinzu" />
          </div>
          <ShoppingCart />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
