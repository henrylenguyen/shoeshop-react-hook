import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link active" href="#">
            HOME
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            MEN
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            WOMEN
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            KIDS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;