import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from './Books';
import Categories from './Categories';

const routes = [
  {
    path: '/',
    label: 'BOOKS',
    element: <Books />,
  },
  {
    path: '/categories',
    label: 'CATEGORIES',
    element: <Categories />,
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo />
        <Nav routes={routes} />
      </div>
      <div className="user-icon">
        <PersonIcon />
      </div>
    </nav>
  );
}

function Nav({ routes }) {
  return (
    <ul className="nav-menu">
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function Logo() {
  return <div className="logo">Bookstore CMS</div>;
}

function PersonIcon() {
  return <div className="person-icon">Person Icon</div>;
}

Nav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      element: PropTypes.element.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
export { routes };
