import "./App.css";
import MainPageComponent from "./main/main.js";
import { Switch, Route } from "react-router-dom";
import Uploadpage from "./upload";
import Productpage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <Productpage />
        </Route>
        <Route exact={true} path="/upload">
          <Uploadpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
