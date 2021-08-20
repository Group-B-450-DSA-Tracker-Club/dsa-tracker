import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import MainPage from "./components/MainPage";

function App() {

  return (
    <Router>
      <Container className="app-container" id="app-container">
        <Switch>
          <Route exact path ="/">
            <MainPage/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
