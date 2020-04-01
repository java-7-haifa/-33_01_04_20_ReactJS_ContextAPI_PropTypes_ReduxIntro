import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReduxCounter from "./redux/ReduxCounter";
import { createStore } from "redux";
// import counterReducer from "./redux/counterReducer";
import rootReducer from './redux/rootReducer';
import { Provider } from "react-redux";
import CarList from "./redux/CarList";

// const store = createStore(counterReducer);
const store = createStore(rootReducer);

const app = <App />;

const redux = (
  <Provider store={store}>
    <ReduxCounter />
    <hr/>
    <CarList />
  </Provider>
);

ReactDOM.render(redux, document.getElementById("root"));
