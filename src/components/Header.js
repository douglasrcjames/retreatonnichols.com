import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaBars } from "react-icons/fa";
import MediaQuery from "react-responsive";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  toggleMenu() {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  render() {
      return (
        <header className="header-padding">
          <div className="top-nav">
            <MediaQuery minWidth={751}>
              <div className="nav-container">
                <Link to="/">
                  <img
                    className="nav-logo"
                    alt="logo"
                    src={require("../assets/images/logos/logo-v2.png")}
                  />
                </Link>
                <div className="right">
                  <NavLink to="/" exact={true} className="nav-link" activeClassName="nav-select">
                      Home
                  </NavLink>
                  <NavLink to="/about-us" className="nav-link" activeClassName="nav-select">
                      About Us
                  </NavLink>
                  &nbsp;
                </div>
              </div>
            </MediaQuery>

            {/* Mobile */}
            <MediaQuery maxWidth={750}>
            <Menu
                customBurgerIcon={<FaBars color="#0E76BC" onClick={() => this.toggleMenu()} />}
                right
                width="50%"
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
              >
                <NavLink id="home" className="menu-item" to="/" onClick={() => this.closeMenu()}>
                    Home
                </NavLink>
                <NavLink id="about-us" className="menu-item" to="/about-us" onClick={() => this.closeMenu()}>
                    About Us
                </NavLink>
                <NavLink id="contact-us" className="menu-item" to="/contact-us" onClick={() => this.closeMenu()}>
                    Contact Us
                </NavLink>
              </Menu>
              {/* had to rearrange this order so the menu appear in the upper right corner */}
              <Link to="/">
                <img
                  className="nav-logo"
                  alt="logo"
                  src={require("../assets/images/logos/logo-v2.png")}
                />
              </Link>
              
            </MediaQuery>
          </div>
        </header>
      );
    }
}

export default Header;
