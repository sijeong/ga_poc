import React from 'react';
import './App.css';
// import createBrowserhistory from 'history'
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GAListener from './GAListener';
// import { withTracker } from './withTracker';
// ReactGA.initialize('UA-170070322-2');
// ReactGA.pageview('/');
// const history = createBrowserhistory()

// initializeReactGA();
function App() {
  return (
    <Router>
      <GAListener trackingId="UA-170070322-2">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about" component={About}>
              <About />
            </Route>
            <Route path="/users" component={Users}>
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </GAListener>
    </Router>
  );
}

// function initializeReactGA() {
//   ReactGA.initialize('UA-170070322-2');
//   ReactGA.pageview('/about');
//   ReactGA.pageview('/users');
// }

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
