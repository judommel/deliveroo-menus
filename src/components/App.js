import React from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import MenuCard from "./MenuCard";
import Content from "./Content";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    data: null
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
        <div>
          <Content mealList={this.state.data} />
          {/* <MenuList title="Brunch" meal={this.state.data.Brunchs} />
        <MenuList
          title="Petit déjeuner"
          meal={this.state.data["Petit déjeuner"]}
        />
        <MenuList title="Salades" meal={this.state.data.Salades} /> */}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    await axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({ data: response.data.menu, isLoading: false });
    });
  }
}

export default App;
