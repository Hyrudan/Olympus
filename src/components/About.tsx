import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Calendar, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, number: '50+', label: 'Projetos Concluídos', color: 'text-green-600' },
    { icon: Users, number: '200+', label: 'Clientes Satisfeitos', color: 'text-green-600' },
    { icon: Calendar, number: '15+', label: 'Anos de Experiência', color: 'text-green-600' },
    { icon: Target, number: '100%', label: 'Qualidade Garantida', color: 'text-green-600' }
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="mb-8">
              <span className="text-green-600 font-semibold text-lg">Sobre a Olympus</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 leading-tight">
                Inspirados pela
                <span className="text-transparent bg-gradient-to-r from-green-500 to-green-700 bg-clip-text"> Grandeza</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Como o Monte Olimpo, onde os deuses gregos habitavam, a ConstrutoraOlympus 
                eleva cada projeto às alturas da perfeição arquitetônica. Nossa missão é 
                criar obras que transcendem o comum, estabelecendo novos patamares de 
                excelência no mercado de construção de luxo.
              </p>
              
              <p className="text-lg">
                Combinamos tradição construtiva com inovação tecnológica, resultando em 
                empreendimentos únicos que refletem o melhor da arquitetura contemporânea. 
                Cada detalhe é cuidadosamente pensado para proporcionar não apenas um 
                espaço, mas uma experiência de vida extraordinária.
              </p>

              <p className="text-lg">
                Nossa equipe de profissionais altamente qualificados trabalha incansavelmente 
                para transformar sonhos em realidade, sempre respeitando prazos, orçamentos 
                e superando expectativas. Na Olympus, não construímos apenas edifícios - 
                construímos legados.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30">
                Conheça Nossa História
              </button>
            </div>
          </div>

          {/* Image and Stats */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe ConstrutoraOlympus"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-xl">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Anos de Excelência</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${stat.color} bg-green-50 p-3 rounded-lg`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;