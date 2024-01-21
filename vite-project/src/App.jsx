import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Result from "./Result/Result";
import Detail from "./Detail/Detail";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/Result" render={(props) => <Result {...props} />} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
