import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";

const propTypes = {
  active: PropTypes.bool,
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  active: false,
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

class Header extends React.Component {
  state = {
    isActive: false,
  };

  nav = React.createRef();
  hamburger = React.createRef();

  componentDidMount() {
    this.props.active && this.openMenu();
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
    this.closeMenu();
  }

  openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    this.nav.current.style.maxHeight = this.nav.current.scrollHeight + "px";
    this.setState({ isActive: true });
  };

  closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    this.nav.current && (this.nav.current.style.maxHeight = null);
    this.setState({ isActive: false });
  };

  keyPress = (e) => {
    this.state.isActive && e.keyCode === 27 && this.closeMenu();
  };

  clickOutside = (e) => {
    if (!this.nav.current) return;
    if (
      !this.state.isActive ||
      this.nav.current.contains(e.target) ||
      e.target === this.hamburger.current
    )
      return;
    this.closeMenu();
  };

  render() {
    const {
      className,
      active,
      navPosition,
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      ...props
    } = this.props;

    const classes = classNames(
      "site-header",
      bottomOuterDivider && "has-bottom-divider",
      className
    );

    return (
      <header {...props} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-header-inner",
              bottomDivider && "has-bottom-divider"
            )}
          >
            <Logo />
            {!hideNav && <React.Fragment></React.Fragment>}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
