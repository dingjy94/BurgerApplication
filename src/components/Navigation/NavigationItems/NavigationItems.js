import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>Build your Burger</NavigationItem>
    <NavigationItem link='/order'>Order History</NavigationItem>
  </ul>
);

export default navigationItems;