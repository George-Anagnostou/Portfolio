import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProjectDetails from "./components/Work/ProjectDetails";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />

      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />

        <Route path="/work/:id">
          <ProjectDetails />
        </Route>

        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
