import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Project from "./Component/Projects";
import Skills from "./Component/Skills";
import Services from "./Component/Services";
import About from "./Component/About"
import Contact from "./Component/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/skills">
            <Skills progress="progress-bar
              bg-info progress-bar-striped progress-bar-animated" border="col p-3"/>
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact style={{color: 'white'}}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
