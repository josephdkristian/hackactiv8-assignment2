import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/home/home';
import About from './components/home/about';
import Experience from './components/home/experience';
import Education from './components/home/education';
import Skills from './components/home/skills';
import Interest from './components/home/interest';
import Awards from './components/home/awards';

 library.add(fab, fas);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path='/About' exact component={About} />
        <Route path='/Experience' exact component={Experience} />
        <Route path='/Education' exact component={Education} />
        <Route path='/Skills' exact component={Skills} />
        <Route path='/Interest' exact component={Interest} />
        <Route path='/Awards' exact component={Awards} />
      </Switch>
    </Router>
  );
}

export default App;
