import React, { Fragment } from "react";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import AppHeader from "./AppHeader";
import LandingPage from "./components/LandingPage";
// import WrightPage from "./components/WrightPage";


import Alert from "react-s-alert";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

const App: React.FC = () => {
  document.title = process.env.REACT_APP_NAME || "";
  return (
    <Fragment>
      <Router>
        <CookiesProvider>
          <div className="App">
            <Switch>
              <Route path="/" exact component={LandingPage} />
            </Switch>
          </div>
        </CookiesProvider>
      </Router>
      <Alert stack={{ limit: 3 }} />
    </Fragment>
  );
};


export default App;
