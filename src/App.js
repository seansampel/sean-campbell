import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <div className="App-title">
            <Navbar />
                <h1 className="Title">
                Sean Campbell - Software Developer
              </h1>
        <ul id="links">
            <Link className="nav-item" to="/">
              Home
            </Link>
            <Link className="nav-item" to="/About">
              About
            </Link>
            <Link className="nav-item" to="Projects">
              Projects
            </Link>
            <Link className="nav-item" to="Contact">
              Contact Me
            </Link>
              <Switch> 
                <Route exact path="/" component={Navbar} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Contact" component={Contact} />
            </Switch> 
            </ul>  
        </div>
      </header>
    </div>
  );
}

export default App;
