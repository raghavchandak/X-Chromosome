import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Screens/Home/index";
import About from "./Screens/About/index";
import QA from "./Screens/QA/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/qa">
          <QA />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
