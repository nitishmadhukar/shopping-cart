import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductContainer from "./containers/ProductContainer";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={App} />
        <Route path="/product/:id" component={ProductContainer} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
