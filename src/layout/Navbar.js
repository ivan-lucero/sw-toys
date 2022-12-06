import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Cart2 as Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function NavScrollExample() {
  const [state, dispatch] = useContext(CartContext);
  const { cart } = state;

  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container fluid className="mx-5">
        <div href="#" className="logo">
          SW TOYS
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navlinks">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="link" to="/sw-toys">
              INICIO
            </Link>
            <Link className="link" to="/products">
              PRODUCTOS
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex ">
          <Link to="/summary">
            <Cart className="cart" />
            <span className="cart-quantity">{cart.length}</span>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
