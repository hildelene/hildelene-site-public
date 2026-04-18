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
            Tem dúvidas ou interesse em parcerias? Teremos prazer em falar com você.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto mt-6" />
        </div>

        <div className="space-y-8 mx-auto max-w-xl">
          {/* Email */}
          <div>
            <h3 className="text-gold font-bold text-lg mb-2">Email</h3>
            <p className="text-cream/70">info@hildelenenautidesign.com</p>
            <p className="text-cream/50 text-sm mt-1">Atendimento para dúvidas e propostas</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-gold font-bold text-lg mb-2">Localização</h3>
            <p className="text-cream/70">Centro de Engenharia Naval</p>
            <p className="text-cream/50 text-sm">Distrito Marítimo</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gold font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
}
