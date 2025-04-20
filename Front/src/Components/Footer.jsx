import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1F2C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-2">
            <span className="text-2xl footer_logo">🐾</span>
            <h2 className="text-2xl font-semibold footer_name">PawClinic</h2>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-gray-300" size={15} />
              <span>Av. Libertador 2034, CABA</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="text-gray-300" size={15} />
              <span>(011) 5050-5050</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-gray-300" size={15} />
              <span>PawClinic@mail.com</span>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-xl text-gray-400">
          © 2025 Veterinaria X - Developed by NataliSch
        </div>
      </div>
    </footer>
  );
};

export default Footer;
