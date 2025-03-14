import './Footer.css';

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div id="div-footer-logo">
                    <div><img src="/logoNegro.jpg" alt="" className="logoBlanco" /></div>
                    <div>PawClinic</div>
                </div>
                <div id='div-footer-contenido'>
                    <div>
                    <ul>
                    <li>Contacto:&nbsp;&nbsp;&nbsp;</li>
                    <li>Av. Siempreviva 153, CABA&nbsp;|</li>
                    <li>&nbsp;&nbsp;(011) 5050-5050&nbsp;&nbsp;</li>
                    <li>|&nbsp;PawClinic@mail.com</li>
                    </ul>
                    </div>
                    <div id='div-footer-copyright'>
                        <p>© 2025 Veterinaria X - Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>

            {/* <div>Seguinos en redes!</div> */}
        </>
    );
}

export default Footer;