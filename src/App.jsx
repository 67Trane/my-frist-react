import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = { items: [] };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;

    let existingItem = this.state.items.find((item) => item.name == name);
    if (existingItem) {
      existingItem.amount++;
      existingItem.price = existingItem.price + existingItem.price;
    } else {
      currentItems.push({
        amount,
        name,
        price,
      });
    }

    this.setState({ items: currentItems });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="product-container">
            <Product
              onAdd={() => this.addItem(1, "Karotten", 2.99)}
              title="Karotten"
              img="carrots.jpg"
              description="Füge karoten zu dienem warenkorb hinzu"
            />
            <Product
              onAdd={() => this.addItem(1, "Gurken", 1.99)}
              title="Gurken"
              img="gurken.jpg"
              description="Füge gurken zu dienem warenkorb hinzu"
            />
            <Product
              onAdd={() => this.addItem(1, "Äpfel", 3.99)}
              title="Apfel"
              img="apfel.jpg"
              description="Füge äpfel zu dienem warenkorb hinzu"
            />
            <Product
              onAdd={() => this.addItem(1, "Birnen", 4.99)}
              title="Birnen"
              img="birnen.jpg"
              description="Füge birnen zu dienem warenkorb hinzu"
            />
          </div>
          <ShoppingCart items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
