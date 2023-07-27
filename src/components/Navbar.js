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
      <div className="navbar-left center-align-items">
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
    <ul className="nav-menu zero-margin-padding">
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export const Logo = () => <div className="logo">Bookstore CMS</div>;

export const PersonIcon = () => (
  <div className="person-icon">
    <div className="oval">
      <div className="mask" />
    </div>
  </div>
);

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
