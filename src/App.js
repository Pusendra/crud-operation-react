import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/brands" component={Brands} />
          <Route path="/vehicles" component={Vehicles} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
