import Landingpage from "./pages/landingpage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contactpage from "./pages/contactpage.jsx";
import Navbar from "./components/navbar/index.jsx";
import Footer from "./components/footer/index.jsx";
import BiyeProduct from "./components/products/biyeProducts/index.jsx";
import TelaProduct from "./components/products/telaProducts/index.jsx";

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/contact" component={Contactpage} />
        <Route path="/biye" component={BiyeProduct} />
        <Route path="/tela" component={TelaProduct} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
