import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { PiPawPrintLight } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="div-footer-logo">
            <PiPawPrintLight className="logoPaw"/>
          <p>PawClinic</p>
        </div>
        <div id="div-footer-contenido">
          <div className="container_footer_contact">
            <h3>Av. Siempreviva 153, CABA</h3>
            <h3>(011) 5050-5050</h3>
            <h3>PawClinic@mail.com</h3>
            <div>
                <a href="#" target="_blank"><FaFacebook /></a>
                <a href="#" target="_blank"><FaInstagram/></a>
            </div>
          </div>
          <div id="div-footer-copyright">
            <p>© 2025 Veterinaria X - Developed by NataliSch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
