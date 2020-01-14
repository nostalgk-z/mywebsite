import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

      <Navbar className={"my-navbar--" + this.props.isSticky} light expand="xs" sticky="top">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="m-auto" navbar>
            
            <NavItem>
              <NavLink onClick={this.props.scrollToTop.bind(this)}>
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link
                  onClick={this.props.handleClick.bind(this)}
                  activeClass="active"
                  className="about-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                  <Link
                    onClick={this.props.handleClick.bind(this)}
                    activeClass="active"
                    className="projects-link"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Projects
                  </Link>
                </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                  <Link
                    onClick={this.props.handleClick.bind(this)}
                    activeClass="active"
                    className="resume-link"
                    to="resume"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Resume
                  </Link>
                </NavLink>
            </NavItem>

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>

    );
  }
}

export default NavBar;
