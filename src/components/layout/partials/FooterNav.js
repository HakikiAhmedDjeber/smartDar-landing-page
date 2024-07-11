import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/">Phone : +213549190040</Link>
        </li>
        <li>
          <Link to="/">Email : smartdar22@gmail.com</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
