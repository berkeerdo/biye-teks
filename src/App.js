import Landingpage from "./pages/landingpage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contactpage from "./pages/contactpage.jsx";
import Navbar from "./components/navbar/index.jsx";
import Footer from "./components/footer/index.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/contact" component={Contactpage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
