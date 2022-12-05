import React from "react";
import { Instagram, Facebook } from "react-bootstrap-icons";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="d-flex align-items-baseline justify-content-evenly py-5 px-0">
        <div>
          <h6 className="footer-title">Contacto</h6>
          <p className="text">Teléfono: 2664 - 123456</p>
          <p className="text">
            Dirección: Av. Sarmiento 1234
            <br /> San Luis, Argentina
          </p>
        </div>
        <div>
          <h6 className="footer-title">Redes sociales</h6>
          <Instagram className="social-icon" />
          <Facebook className="social-icon" />
        </div>
      </div>
      <div className="text-center footer-copy py-3">
        <p className="text my-0">Realizado por Padawan Iván Lucero</p>
      </div>
    </footer>
  );
};

export default Footer;
