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
          {/* Contact Form removido */}

          {/* Contact Form */}
          <div>
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
