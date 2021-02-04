import React from "react";
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Post";

export default function App() {
  return (
    <div className="main_container">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Content />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
