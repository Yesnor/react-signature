import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Type from "./components/Type";
import Draw from "./components/Draw";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/drawSignature" component={Draw} />
        <Route exact path="/typeSignature" component={Type} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
