import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import isengard from "./utils/isengard";
import MainPage from "./components/MainPage";
import Module from "./components/Module";
import {ModuloDisplay} from "./components/ModuloDisplay";


function App() {


  return (
    <Router>
      <Container className="app-container" id="app-container">
        <Switch>
          <Route exact path ="/">
            <MainPage/>
              {/* <ModuloDisplay/> */}
          </Route>
          <Route exact path="/module">
            <Module/>
          </Route>
        </Switch>

      </Container>
    </Router>
  );
}

export default App;
