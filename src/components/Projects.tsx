import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Home, Clock, CheckCircle, MessageCircle } from 'lucide-react';

const Projects = () => {
  const [currentCompletedProject, setCurrentCompletedProject] = useState(0);
  const [currentOngoingProject, setCurrentOngoingProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const completedProjects = [
    {
      title: 'Residencial Aurora',
      location: 'Alphaville, SP',
      year: '2023',
      type: 'Residencial de Luxo',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Condomínio exclusivo com arquitetura contemporânea e acabamentos premium.',
      features: ['Área verde preservada', 'Piscinas aquecidas', 'Academia completa', 'Salão de festas'],
      status: 'Concluído',
      units: '120 unidades',
      area: '15.000m²'
    },
    {
      title: 'Torre Olympus',
      location: 'Vila Olímpia, SP',
      year: '2023',
      type: 'Comercial Premium',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Edifício corporativo inteligente com tecnologia de ponta e sustentabilidade.',
      features: ['Certificação LEED', 'Automação predial', 'Heliponto', 'Coworking exclusivo'],
      status: 'Concluído',
      units: '40 salas',
      area: '25.000m²'
    },
    {
      title: 'Casa Olympo',
      location: 'Granja Viana, SP',
      year: '2023',
      type: 'Casa de Alto Padrão',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Residência única com design arquitetônico inspirado na natureza.',
      features: ['Design biofílico', 'Piscina infinita', 'Cinema privativo', 'Adega climatizada'],
      status: 'Concluído',
      units: '1 residência',
      area: '2.500m²'
    },
    {
      title: 'Condomínio Zeus',
      location: 'Santana de Parnaíba, SP',
      year: '2022',
      type: 'Loteamento Fechado',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Loteamento de luxo com infraestrutura completa e segurança 24h.',
      features: ['Clube privativo', 'Campo de golfe', 'Trilhas ecológicas', 'Segurança blindada'],
      status: 'Concluído',
      units: '200 lotes',
      area: '500.000m²'
    },
    {
      title: 'Edifício Atenas',
      location: 'Jardins, SP',
      year: '2022',
      type: 'Residencial Premium',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Apartamentos de alto padrão no coração dos Jardins com vista panorâmica.',
      features: ['Vista 360°', 'Spa completo', 'Concierge 24h', 'Terraço gourmet'],
      status: 'Concluído',
      units: '60 apartamentos',
      area: '18.000m²'
    },
    {
      title: 'Villa Poseidon',
      location: 'Riviera de São Lourenço, SP',
      year: '2021',
      type: 'Resort Residencial',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complexo residencial de luxo à beira-mar com serviços hoteleiros.',
      features: ['Praia privativa', 'Marina exclusiva', 'Spa resort', 'Restaurante gourmet'],
      status: 'Concluído',
      units: '80 residências',
      area: '300.000m²'
    }
  ];

  const ongoingProjects = [
    {
      title: 'Residencial Hera',
      location: 'Morumbi, SP',
      year: '2024-2026',
      type: 'Residencial Ultra Luxo',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Empreendimento exclusivo com apenas 24 unidades e acabamentos únicos.',
      features: ['Apartamentos duplex', 'Elevador privativo', 'Jardim suspenso', 'Wine bar'],
      status: 'Em Andamento',
      progress: '65%',
      completion: 'Dezembro 2025',
      units: '24 unidades',
      area: '12.000m²'
    },
    {
      title: 'Centro Empresarial Apolo',
      location: 'Faria Lima, SP',
      year: '2024-2025',
      type: 'Complexo Corporativo',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Torres gêmeas inteligentes com conceito de sustentabilidade avançada.',
      features: ['Energia solar', 'Sistema BIM', 'Rooftop garden', 'Estação de recarga'],
      status: 'Em Andamento',
      progress: '40%',
      completion: 'Junho 2025',
      units: '2 torres',
      area: '45.000m²'
    },
    {
      title: 'Mansões Artemis',
      location: 'Campos do Jordão, SP',
      year: '2024-2026',
      type: 'Casas de Campo Luxo',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Residências de montanha com arquitetura sustentável e vista panorâmica.',
      features: ['Aquecimento geotérmico', 'Lareira ecológica', 'Deck panorâmico', 'Trilha privativa'],
      status: 'Em Andamento',
      progress: '25%',
      completion: 'Março 2026',
      units: '12 casas',
      area: '80.000m²'
    },
    {
      title: 'Condomínio Hermes',
      location: 'Bragança Paulista, SP',
      year: '2024-2027',
      type: 'Eco Residencial',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Primeiro condomínio carbono neutro da região com tecnologia verde.',
      features: ['Energia renovável', 'Horta comunitária', 'Lago artificial', 'Centro equestre'],
      status: 'Em Andamento',
      progress: '15%',
      completion: 'Setembro 2027',
      units: '150 lotes',
      area: '750.000m²'
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

  const nextCompletedProject = () => {
    setCurrentCompletedProject((prev) => (prev + 1) % completedProjects.length);
  };

  const prevCompletedProject = () => {
    setCurrentCompletedProject((prev) => (prev - 1 + completedProjects.length) % completedProjects.length);
  };

  const nextOngoingProject = () => {
    setCurrentOngoingProject((prev) => (prev + 1) % ongoingProjects.length);
  };

  const prevOngoingProject = () => {
    setCurrentOngoingProject((prev) => (prev - 1 + ongoingProjects.length) % ongoingProjects.length);
  };

  const openWhatsApp = (projectTitle: string) => {
    const message = `Olá! Gostaria de saber mais informações sobre o projeto ${projectTitle}. Podemos conversar?`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const ProjectCard = ({ project, isOngoing = false }: { project: any, isOngoing?: boolean }) => (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <div className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium ${
            isOngoing 
              ? 'bg-orange-100 text-orange-700 border border-orange-200' 
              : 'bg-green-100 text-green-700 border border-green-200'
          }`}>
            {isOngoing ? <Clock className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
            <span>{project.status}</span>
          </div>
        </div>

        {/* Progress Bar for Ongoing Projects */}
        {isOngoing && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="flex justify-between text-white text-sm mb-2">
                <span>Progresso</span>
                <span>{project.progress}</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: project.progress }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              {project.type}
            </span>
            <span className="text-gray-500 text-sm">
              {project.year}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            {project.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{project.location}</span>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Project Info */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-500">Unidades</div>
            <div className="font-semibold text-gray-800">{project.units}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Área Total</div>
            <div className="font-semibold text-gray-800">{project.area}</div>
          </div>
          {isOngoing && (
            <div className="col-span-2">
              <div className="text-sm text-gray-500">Previsão de Entrega</div>
              <div className="font-semibold text-gray-800">{project.completion}</div>
            </div>
          )}
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Principais Características:</h4>
          <div className="grid grid-cols-2 gap-3">
            {project.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-600"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => openWhatsApp(project.title)}
            className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
          </button>
          <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Ver Mais Detalhes
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projetos" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-green-600 font-semibold text-lg">Nossos Projetos</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Obras que
            <span className="text-transparent bg-gradient-to-r from-green-500 to-green-700 bg-clip-text"> Inspiram</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Cada projeto é uma obra de arte única, combinando inovação, sustentabilidade 
            e o mais alto padrão de qualidade construtiva.
          </p>
        </div>

        {/* Completed Projects Section */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-gray-800">Projetos Concluídos</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevCompletedProject}
                className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextCompletedProject}
                className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <ProjectCard project={completedProjects[currentCompletedProject]} />

          {/* Completed Project Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {completedProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCompletedProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCompletedProject ? 'bg-green-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <h3 className="text-3xl font-bold text-gray-800">Projetos em Andamento</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevOngoingProject}
                className="bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextOngoingProject}
                className="bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <ProjectCard project={ongoingProjects[currentOngoingProject]} isOngoing={true} />

          {/* Ongoing Project Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {ongoingProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOngoingProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentOngoingProject ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { icon: Home, value: '50+', label: 'Projetos Entregues' },
            { icon: Clock, value: '4', label: 'Em Andamento' },
            { icon: MapPin, value: '15', label: 'Cidades Atendidas' },
            { icon: CheckCircle, value: '100%', label: 'Satisfação Cliente' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Interessado em Algum Projeto?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Fale conosco pelo WhatsApp e receba informações detalhadas sobre 
              nossos empreendimentos. Atendimento personalizado e rápido!
            </p>
            <button
              onClick={() => openWhatsApp('informações gerais sobre os projetos')}
              className="flex items-center justify-center space-x-3 bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mx-auto"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;