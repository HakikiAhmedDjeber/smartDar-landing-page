import React from "react";
import classNames from "classnames";

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://www.youtube.com/@SmartDar">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>YouTube</title>
              <path d="M15.27 3.24a2.445 2.445 0 00-1.72-1.72C12.35 1 8 1 8 1s-4.35 0-5.55.52c-.86.3-1.54.88-1.84 1.63A2.445 2.445 0 00.73 4.76C.2 5.96 0 7.36 0 8s.2 2.04.52 3.24c.3.75.98 1.33 1.84 1.63C3.65 13 8 13 8 13s4.35 0 5.55-.52a2.445 2.445 0 001.72-1.72C16 10.04 16 8 16 8s0-2.04-.73-3.24zM6.5 10.5V5.5l5 2.5-5 2.5z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
