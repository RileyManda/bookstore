import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from './Book';
import Categories from './Categories';

const routes = [
  {
    path: '/',
    label: 'Book',
    element: <Books />,
  },
  {
    path: '/categories',
    label: 'Categories',
    element: <Categories />,
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-right">
        <Nav routes={routes} />
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
