import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const openWhatsApp = () => {
    const message = 'Olá! Gostaria de falar com a equipe da ConstrutoraOlympus sobre meu projeto.';
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 9999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@olympus.com.br',
      link: 'mailto:contato@olympus.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Paulista, 1000 - São Paulo, SP',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 8h às 18h',
      link: null
    }
  ];

  return (
    <section id="contato" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-green-600 font-semibold text-lg">Entre em Contato</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Vamos Construir
            <span className="text-transparent bg-gradient-to-r from-green-500 to-green-700 bg-clip-text"> Juntos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Pronto para começar seu projeto dos sonhos? Nossa equipe está aqui para 
            transformar suas ideias em realidade. Entre em contato conosco hoje mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Fale Conosco
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Estamos ansiosos para conhecer seu projeto e discutir como podemos 
                ajudar você a alcançar seus objetivos. Nossa equipe de especialistas 
                está pronta para oferecer soluções personalizadas.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Atendimento Rápido via WhatsApp</h4>
              <p className="text-green-100 mb-4">
                Prefere conversar pelo WhatsApp? Clique no botão abaixo e fale diretamente 
                com nossa equipe. Resposta garantida em poucos minutos!
              </p>
              <button 
                onClick={openWhatsApp}
                className="flex items-center space-x-2 bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>

            {/* Additional CTA */}
            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Agende uma Reunião</h4>
              <p className="text-gray-600 mb-4">
                Prefere uma conversa mais detalhada? Agende uma reunião gratuita 
                para discutir seu projeto pessoalmente.
              </p>
              <button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Agendar Reunião
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Recebemos sua mensagem e entraremos em contato em breve. 
                    Obrigado pelo interesse na ConstrutoraOlympus!
                  </p>
                  <button
                    onClick={openWhatsApp}
                    className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-auto"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Ou fale no WhatsApp</span>
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Envie sua Mensagem
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Assunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="orcamento">Solicitação de Orçamento</option>
                          <option value="projeto">Novo Projeto</option>
                          <option value="reforma">Reforma</option>
                          <option value="consultoria">Consultoria</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Descreva seu projeto ou necessidade..."
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                          isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:shadow-xl hover:shadow-green-500/30'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Enviar Mensagem</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={openWhatsApp}
                        className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;