import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import WebFont from 'webfontloader';
import './App.css';
import routes from './route-config';
import Navbar from './components/Navbar';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif'],
  },
});
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
