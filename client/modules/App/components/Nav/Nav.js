import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Nav.css';

function Nav(props, context) {
  return (
    <ul className={styles.nav}>
      <li>
        <Link className={styles["nav-link"]} to="/home">Home</Link>
      </li>
      <li>
        <Link className={styles["nav-link"]} to="/">Posts</Link>
      </li>
      <li>
        <Link className={styles["nav-link"]} to="/about">About</Link>
      </li>
    </ul>
  );
}

Nav.propTypes = {
};

export default Nav;
