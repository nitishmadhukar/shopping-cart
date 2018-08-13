import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductDetails from "./components/ProductDetails";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={App} />
      <Route path="/product/:id" component={ProductDetails} />
    </Fragment>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
