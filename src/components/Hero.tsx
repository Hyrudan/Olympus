import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    {
      url: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Arquitetura de Luxo',
      description: 'Projetos exclusivos que redefinindo padrões de excelência'
    },
    {
      url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Construções Premium',
      description: 'Inovação e sofisticação em cada detalhe'
    },
    {
      url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Projetos Únicos',
      description: 'Transformando sonhos em realidade arquitetônica'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                Construindo
                <span className="block text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text animate-pulse">
                  Grandezas
                </span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-xl lg:text-2xl text-green-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-300">
                {heroImages[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <button 
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
              >
                Ver Projetos
              </button>
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-green-400 scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 text-white hover:text-green-400 transition-all duration-300 animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;