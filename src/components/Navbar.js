import React from 'react';
import Categories from './Categories';
import Books from './Books';

const routes = [
  {
    path: '/',
    element: <Books />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
];

export default routes;
