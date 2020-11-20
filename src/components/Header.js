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
            <MediaQuery minWidth={815}>
              <div className="nav-container">
                <Link to="/">
                  <img
                    className="nav-logo"
                    alt="logo"
                    src={require("../assets/images/logos/logo-v2.png")}
                  />
                </Link>
                <div className="right">
                  <div className="top-dropdown">
                    <Link to="" className="nav-link">Suites &nbsp;<i className="fas fa-chevron-down fa-xs" /> </Link>
                    &nbsp;
                    <div className="top-dropdown-content">
                      <NavLink 
                          to="/suites/piet-mondrian" 
                          className="dropdown-nav-link dropdown"
                          activeClassName="nav-drop-select">
                          Piet Mondrian
                      </NavLink>
                      <NavLink 
                          to="/suites/georgia-o-keeffe" 
                          className="dropdown-nav-link dropdown"
                          activeClassName="nav-drop-select">
                          Georgia O'Keeffe
                      </NavLink>                     
                    </div>  
                  </div>
                  {/* <NavLink to="/testimonials" className="nav-link" activeClassName="nav-select">
                      Testimonials
                  </NavLink> */}
                  <NavLink to="/the-hosts" className="nav-link" activeClassName="nav-select">
                      The Hosts
                  </NavLink>
                  <NavLink to="/reserve" className="nav-link" activeClassName="nav-select">
                      Reserve
                  </NavLink>
                  {/* <NavLink to="/contact" className="nav-link" activeClassName="nav-select">
                      Contact
                  </NavLink> */}
                  &nbsp;
                </div>
              </div>
            </MediaQuery>

            {/* Mobile */}
            <MediaQuery maxWidth={814}>
            <Menu
                customBurgerIcon={<FaBars color="#0E76BC" onClick={() => this.toggleMenu()} />}
                right
                width="50%"
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
              >
                <div className="side-dropdown">
                  <span className="menu-item" >Suites &nbsp;<i className="fas fa-chevron-down fa-xs" /></span>
                  &nbsp;
                  <div className="side-dropdown-content">
                    <NavLink 
                        id="piet-mondrian"
                        to="/suites/piet-mondrian" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Piet Mondrian
                    </NavLink>
                    <NavLink 
                        id="georgia-o-keeffe"
                        to="/suites/georgia-o-keeffe" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Georgia O'Keeffe
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/the-hosts" className="nav-link" activeClassName="nav-select" onClick={() => this.closeMenu()}>
                  The Hosts
                </NavLink>
                <NavLink to="/reserve" className="nav-link" activeClassName="nav-select" onClick={() => this.closeMenu()}>
                  Reserve
                </NavLink>
                {/* <NavLink to="/contact" className="nav-link" activeClassName="nav-select">
                  Contact
                </NavLink> */}
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
