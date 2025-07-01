import React from 'react';
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ConstrutoraOlympus</h3>
                <p className="text-green-400 text-sm">Construindo Grandezas</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Há mais de 15 anos transformando sonhos em realidade através de 
              projetos arquitetônicos únicos e construções de alto padrão. 
              Inspirados pela grandeza do Monte Olimpo, criamos obras que 
              transcendem o comum.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <nav className="space-y-3">
              {[
                { name: 'Sobre Nós', href: '#sobre' },
                { name: 'Projetos', href: '#projetos' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Depoimentos', href: '#depoimentos' },
                { name: 'Contato', href: '#contato' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(11) 9999-9999</p>
                  <p className="text-gray-400 text-sm">Seg-Sex: 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">contato@olympus.com.br</p>
                  <p className="text-gray-400 text-sm">Resposta em até 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Av. Paulista, 1000</p>
                  <p className="text-gray-400 text-sm">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ConstrutoraOlympus. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
    </footer>
  );
};

export default Footer;