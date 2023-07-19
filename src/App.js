import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import routes from './route-config';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav routes={routes} />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

function Nav({ routes }) {
  return (
    <ul>
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
}

Nav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
