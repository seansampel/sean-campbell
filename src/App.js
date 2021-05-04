import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <Navbar />
          <h1 className="Title">
          Sean Campbell - Software Developer
        </h1>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      
        </div>
      </header>
    </div>
  );
}

export default App;
