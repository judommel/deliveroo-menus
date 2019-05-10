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

    let newCart = [...this.state.cart];

    let index = newCart.map(item => item.id).indexOf(e);

    item = { ...this.state.cart[index] };

    item.quantity = item.quantity + 1;

    newCart.splice(index, 1, item);

    this.setState({ cart: newCart });
  };

  del = e => {
    let item;

    let newCart = [...this.state.cart];

    let index = newCart.map(item => item.id).indexOf(e);

    item = { ...this.state.cart[index] };
    item.quantity = item.quantity - 1;

    newCart.splice(index, 1, item);

    this.setState({ cart: newCart });
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

    let index = newCart.map(item => item.id).indexOf(e);

    if (index !== -1) {
      item = { ...newCart[index] };
      item.quantity = item.quantity + 1;

      newCart.splice(index, 1, item);

      found = true;
    }

    if (found === false) {
      newCart.push(item);
    }

    this.setState({ cart: newCart });
  };

  handleScroll = e => {
    console.log("ok", window.scrollY);
    if (window.scrollY > 292) {
      console.log("scrolled");
      this.setState({ scrolled: true });
      console.log(this.state.scrolled);
    } else {
      this.setState({ scrolled: false });
      console.log(this.state.scrolled);
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
        <div>
          <Header />
          <Title
            name={this.state.data.restaurant.name}
            description={this.state.data.restaurant.description}
            pic={this.state.data.restaurant.picture}
          />
          <Nav
            pos={this.state.scrolled ? "fixedNav" : "container-nav"}
            mealList={this.state.data.menu}
          />
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
                add={e => this.add(e)}
                del={e => this.del(e)}
                cart={this.state.cart}
                pos={this.state.scrolled ? "fixedCart" : "cart"}
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
    window.addEventListener("scroll", this.handleScroll);
  }
}

export default App;
