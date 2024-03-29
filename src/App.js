import './App.css';
import NavBar from './components/nav/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/portfolio';
import About from './components/about';
import Footer from './components/footer/footer';
import Contact from './components/contact';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <div className="push"></div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
