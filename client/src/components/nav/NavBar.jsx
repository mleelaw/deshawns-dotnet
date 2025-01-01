import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function NavBar() {
    return (
        <Navbar color="light" expand="md">
          <Nav navbar>
            <NavbarBrand href="/">🐕‍🦺 🐩 DeShawn's Dog Walking</NavbarBrand>
            <NavItem>
              <NavLink href="/walkers">Walkers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cities">Cities</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
    };
    
    export default NavBar;