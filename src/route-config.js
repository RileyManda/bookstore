import React from 'react';
import Books from './components/Books';
import Categories from './components/Categories';

const routes = [
  {
    path: '/',
    label: 'Books',
    element: <Books />,
  },
  {
    path: '/categories',
    label: 'Categories',
    element: <Categories />,
  },
];

export default routes;
