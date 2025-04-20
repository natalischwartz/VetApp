import { Facebook, Instagram } from "lucide-react";
import './Footer.css';

const Footer = () => {
  return (
    <Footer className="w-full bg-[#1A1F2C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <h2 className="text-2xl font-semibold">PawClinic</h2>
          </div>

          {/* Información de Contacto */}
          <div className="text-center md:text-right">
            <p className="text-gray-300">Av. Siempreviva 153, CABA</p>
            <p className="text-gray-300">(011) 5050-5050</p>
            <p className="text-gray-300">PawClinic@mail.com</p>
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2025 Veterinaria X - Developed by NataliSch
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
