import React from "react";
import Header from "./Header";
import Title from "./Title";
import Content from "./Content";
import Cart from "./Cart";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    data: null,
    cart: []
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <Header />
          <div>Loading...</div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Title
          name={this.state.data.restaurant.name}
          description={this.state.data.restaurant.description}
          pic={this.state.data.restaurant.picture}
        />
        <div>
          <div className="container-content main">
            <Content mealList={this.state.data.menu} />
            <Cart
              cartContent={
                this.state.cart.length === 0
                  ? "Votre panier est vide"
                  : this.state.cart
              }
            />
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    await axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({ data: response.data, isLoading: false });
    });
  }
}

export default App;
