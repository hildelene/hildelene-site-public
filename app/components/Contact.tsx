'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-navy-dark border-t border-gold/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Entre em <span className="text-gold">Contato</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Tem duvidas ou interesse em parcerias? Teremos prazer em falar com voce.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-2">Email</h3>
              <p className="text-cream/70">info@hildelenenautidesign.com</p>
              <p className="text-cream/50 text-sm mt-1">Atendimento para duvidas e propostas</p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-2">Localizacao</h3>
              <p className="text-cream/70">Centro de Engenharia Naval</p>
              <p className="text-cream/50 text-sm">Distrito Maritimo</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Siga-nos</h3>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-navy-dark/50 border border-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-200"
                      aria-label={social}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Links Rapidos</h3>
              <ul className="space-y-2">
                {['Area da Equipe', 'Documentacao', 'Perguntas Frequentes', 'Carreiras'].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-cream/70 hover:text-gold transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-navy-dark/50 border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gold font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-dark border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gold font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-dark border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gold font-semibold mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-dark border border-gold/30 rounded-lg text-cream focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>
                  <option value="sponsorship">Proposta de patrocinio</option>
                  <option value="partnership">Oportunidade de parceria</option>
                  <option value="technical">Duvida tecnica</option>
                  <option value="media">Solicitacao de imprensa</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gold font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-navy-dark border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Escreva sua mensagem..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gold text-navy-dark font-bold rounded-lg hover:bg-cream transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {isSubmitted ? '✓ Mensagem enviada!' : 'Enviar mensagem'}
              </button>

              {isSubmitted && (
                <p className="text-gold text-center text-sm">
                  Obrigado pela sua mensagem. Em breve entraremos em contato.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
