import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React + TypeScript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>{/* <a href="/">Список роботи</a> */}</li>
          <li>{/* <a href="/">Магазин</a> */}</li>
        </ul>
      </div>
    </nav>
  );
};
