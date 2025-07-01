import React, { useState, useEffect } from 'react';
import { Menu, X, Building, Phone, Mail, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    const message = 'Olá! Gostaria de conhecer mais sobre os serviços da ConstrutoraOlympus.';
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Animado */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-green-400/30">
                  <Building className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-300 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-2xl font-bold bg-gradient-to-r from-green-600 to-gray-700 bg-clip-text text-transparent transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  ConstrutoraOlympus
                </h1>
                <p className={`text-xs font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-green-200'
                }`}>
                  Construindo Grandezas
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {['inicio', 'sobre', 'projetos', 'servicos', 'depoimentos', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-green-400 relative group ${
                    isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Contact Info & WhatsApp */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className={`flex items-center space-x-2 text-sm ${
                isScrolled ? 'text-gray-600' : 'text-green-200'
              }`}>
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className={`flex items-center space-x-2 text-sm ${
                isScrolled ? 'text-gray-600' : 'text-green-200'
              }`}>
                <Mail className="w-4 h-4" />
                <span>contato@olympus.com</span>
              </div>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}>
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {['inicio', 'sobre', 'projetos', 'servicos', 'depoimentos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors duration-300 py-2 border-b border-gray-100 last:border-b-0"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>contato@olympus.com</span>
              </div>
              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;