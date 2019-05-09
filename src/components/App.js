import React from "react";
import Header from "./Header";
import Title from "./Title";
import Nav from "./Nav";
import Content from "./Content";
import Cart from "./Cart";
import axios from "axios";
import CartItems from "./CardItems";

class App extends React.Component {
  state = {
    isLoading: true,
    data: null,
    scrolled: false,
    cart: []
  };

  add = e => {
    let item;

    let newCart = [];

    for (let i = 0; i < this.state.cart.length; i++) {
      if (e === this.state.cart[i].id) {
        item = { ...this.state.cart[i] };
        item.quantity = item.quantity + 1;

        newCart = [...this.state.cart];

        newCart.splice(i, 1, item);
      }
    }

    this.setState({ cart: newCart });
  };

  del = e => {
    let item;

    let newCart = [];

    for (let i = 0; i < this.state.cart.length; i++) {
      if (e === this.state.cart[i].id) {
        item = { ...this.state.cart[i] };
        item.quantity = item.quantity - 1;

        newCart = [...this.state.cart];

        newCart.splice(i, 1, item);

        console.log(newCart);
      }
    }

    this.setState({ cart: newCart });
  };

  cartRender = () => {
    let cartArray = this.state.cart
      .filter(prod => prod.quantity > 0)
      .map(prod => (
        <CartItems
          id={prod.id}
          add={e => this.add(e)}
          del={e => this.del(e)}
          price={(prod.price * prod.quantity).toFixed(2)}
          quantity={prod.quantity}
          item={prod.title.slice(0, 15)}
        />
      ));

    let total = 0;

    for (let i = 0; i < this.state.cart.length; i++) {
      total += this.state.cart[i].price * this.state.cart[i].quantity;
    }

    if (this.state.cart.length === 0 || total === 0) {
      return "Votre panier est vide";
    }

    total = total.toFixed(2);

    return (
      <div>
        <div>{cartArray}</div>
        <div>---------------------</div>
        <div>{"Total : " + total + " €"}</div>
      </div>
    );
  };

  selectItem = e => {
    let item;

    let keys = Object.keys(this.state.data.menu);

    let mealArray = keys.map(key => this.state.data.menu[key]);

    for (let i = 0; i < mealArray.length; i++) {
      for (let j = 0; j < mealArray[i].length; j++) {
        if (e === mealArray[i][j].id) {
          item = { ...mealArray[i][j] };
          item.quantity = 1;
        }
      }
    }

    let newCart = [...this.state.cart];

    let found = false;

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === e) {
        item = { ...newCart[i] };
        item.quantity = item.quantity + 1;

        newCart.splice(i, 1, item);

        found = true;
      }
    }

    if (found === false) {
      newCart.push(item);
    }

    this.setState({ cart: newCart });
  };

  handleScroll = e => {
    console.log("ok");
    if (e.target.scrollTop > 150) {
      console.log("scrolled");
      this.setState({ scrolled: true });
    }
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
        <div
          onScroll={e => {
            // this.handleScroll(e);
            console.log(e);
          }}
        >
          <Header />
          <Title
            name={this.state.data.restaurant.name}
            description={this.state.data.restaurant.description}
            pic={this.state.data.restaurant.picture}
          />
          <Nav mealList={this.state.data.menu} />
          <div className="main">
            <div>
              <Content
                className="container-content"
                mealList={this.state.data.menu}
                onSelect={e => {
                  this.selectItem(e);
                }}
              />
            </div>
            <div className="cart-wrapper">
              <Cart
                style={{ position: this.state.scrolled ? "absolute" : "fixed" }}
                cartContent={this.cartRender()}
              />
            </div>
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
