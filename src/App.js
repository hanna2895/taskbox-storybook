import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import PureTaskList from "./components/TaskList";

import "./App.css";

class App extends Component {
  render() {
    console.log(store);
    return (
      <Provider store={store}>
        <PureTaskList />
      </Provider>
    );
  }
}

export default App;
