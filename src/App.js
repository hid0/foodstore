import React, { useEffect } from "react";
import store from "./app/store";
import Home from "./pages/Home";
import "upkit/dist/style.min.css";
import { Provider } from "react-redux";
import { listen } from "./app/listener";
import Register from "./pages/Register";
import RegisterSuccess from "./pages/RegisterSuccess";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    listen();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register/success" component={RegisterSuccess} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
