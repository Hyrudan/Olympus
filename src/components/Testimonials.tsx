import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Roberto Silva',
      position: 'CEO, Silva Holdings',
      project: 'Edifício Corporativo Premium',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'A ConstrutoraOlympus superou todas as nossas expectativas. O nível de detalhamento, a qualidade dos acabamentos e o cumprimento rigoroso dos prazos foram impressionantes. Nosso edifício corporativo se tornou uma referência na região.',
      highlight: 'Qualidade excepcional e prazos cumpridos'
    },
    {
      name: 'Ana Carolina Mendes',
      position: 'Arquiteta',
      project: 'Residência de Alto Padrão',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Trabalhar com a equipe da Olympus foi uma experiência transformadora. Eles não apenas executaram nosso projeto arquitetônico com perfeição, mas também contribuíram com sugestões valiosas que elevaram ainda mais o resultado final.',
      highlight: 'Parceria técnica excepcional'
    },
    {
      name: 'Carlos Eduardo Santos',
      position: 'Empresário',
      project: 'Condomínio Residencial',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'O investimento no condomínio desenvolvido pela Olympus foi um dos melhores que já fiz. A valorização do empreendimento superou as projeções iniciais, e a satisfação dos moradores é unânime.',
      highlight: 'ROI excepcional e satisfação garantida'
    },
    {
      name: 'Maria Fernanda Costa',
      position: 'Diretora Comercial',
      project: 'Reforma Corporativa',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'A reforma do nosso escritório foi executada sem interromper nossas operações. A Olympus demonstrou um profissionalismo exemplar, sempre comunicando cada etapa e mantendo o ambiente limpo e organizado.',
      highlight: 'Execução sem interrupção das atividades'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-green-600 font-semibold text-lg">Depoimentos</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            O que Nossos
            <span className="text-transparent bg-gradient-to-r from-green-500 to-green-700 bg-clip-text"> Clientes Dizem</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A satisfação de nossos clientes é nossa maior conquista. Veja o que eles 
            têm a dizer sobre nossa parceria e resultados alcançados.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative overflow-hidden">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Highlight */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 inline-block">
                  <p className="text-green-700 font-semibold">
                    {testimonials[currentTestimonial].highlight}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300 hover:scale-110 text-gray-600 hover:text-green-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300 hover:scale-110 text-gray-600 hover:text-green-600"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-green-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: '98%', label: 'Satisfação dos Clientes' },
            { number: '50+', label: 'Projetos Entregues' },
            { number: '15+', label: 'Anos de Mercado' },
            { number: '100%', label: 'Prazos Cumpridos' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;