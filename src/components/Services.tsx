import React, { useEffect, useRef, useState } from 'react';
import { Building, Hammer, Ruler, Cog, Shield, Lightbulb } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Building,
      title: 'Construção Civil',
      description: 'Execução completa de projetos residenciais e comerciais com acabamento premium e tecnologia de ponta.',
      features: ['Obras residenciais', 'Edifícios comerciais', 'Reformas de luxo', 'Ampliações']
    },
    {
      icon: Ruler,
      title: 'Projetos Arquitetônicos',
      description: 'Desenvolvimento de projetos únicos e personalizados, alinhados com as necessidades e sonhos dos clientes.',
      features: ['Arquitetura residencial', 'Design comercial', 'Interiores', 'Paisagismo']
    },
    {
      icon: Cog,
      title: 'Engenharia Especializada',
      description: 'Soluções técnicas avançadas com foco em segurança, sustentabilidade e inovação tecnológica.',
      features: ['Estrutural', 'Hidráulica', 'Elétrica', 'Automação']
    },
    {
      icon: Shield,
      title: 'Gestão de Obras',
      description: 'Acompanhamento completo desde o planejamento até a entrega, garantindo prazos e qualidade.',
      features: ['Cronograma detalhado', 'Controle de qualidade', 'Supervisão técnica', 'Relatórios periódicos']
    },
    {
      icon: Hammer,
      title: 'Reformas Premium',
      description: 'Modernização e transformação de espaços existentes com soluções criativas e materiais de alta qualidade.',
      features: ['Reformas completas', 'Renovação fachadas', 'Upgrade tecnológico', 'Sustentabilidade']
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada para tomada de decisões estratégicas em projetos de construção e investimento.',
      features: ['Viabilidade técnica', 'Análise de custos', 'Due diligence', 'Perícias técnicas']
    }
  ];

  return (
    <section id="servicos" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-green-600 font-semibold text-lg">Nossos Serviços</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Soluções
            <span className="text-transparent bg-gradient-to-r from-green-500 to-green-700 bg-clip-text"> Completas</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Oferecemos um portfólio abrangente de serviços especializados para atender 
            todas as necessidades do seu projeto, do conceito à entrega final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-green-400/30">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-300 flex items-center group-hover:translate-x-1">
                  Saiba mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Começar Seu Projeto?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está preparada para transformar suas ideias em realidade. 
              Entre em contato e descubra como podemos criar algo extraordinário juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Agendar Reunião
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;