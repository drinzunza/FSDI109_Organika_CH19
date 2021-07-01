import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./components/catalog";

import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>    

      <Catalog></Catalog>
    
      <Footer></Footer>
    </div>
  );
}

export default App;
