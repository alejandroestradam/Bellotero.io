import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Home from './Home';
import Navbar from './Navbar';
import Partners from './Partners';
import Solutions from './Solutions';
import Stories from './Stories';


const App = () => {
  return (
    <Router>
          <Navbar />
          <Switch>
            <Route path ="/solutions">
                <Solutions />
            </Route>
            <Route path ="/stories">
                <Stories />
            </Route>
            <Route path ="/partners">
                <Partners />
            </Route>
            <Route path ="/about">
                <About />
            </Route>
            <Route path ="/blog">
                <Blog />
            </Route>
            <Route path ="/">
                <Home />
            </Route>
            </Switch>
    </Router>
  )
}

export default App;
