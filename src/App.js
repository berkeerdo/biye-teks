import Landingpage from "./pages/landingpage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landingpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
