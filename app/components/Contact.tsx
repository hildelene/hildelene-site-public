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
    console.log('Form submitted:', formData);
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
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Have questions or interested in partnerships? We&apos;d love to hear from you.
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
              <p className="text-cream/50 text-sm mt-1">Available 24/7 for inquiries</p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-2">Location</h3>
              <p className="text-cream/70">Naval Engineering Center</p>
              <p className="text-cream/50 text-sm">Maritime District</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Follow Us</h3>
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
              <h3 className="text-gold font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Team Area', 'Documentation', 'FAQ', 'Careers'].map(
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
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-dark border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
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
                  Subject
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
                    Select a subject
                  </option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="technical">Technical Question</option>
                  <option value="media">Media Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gold font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-navy-dark border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gold text-navy-dark font-bold rounded-lg hover:bg-cream transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {isSubmitted && (
                <p className="text-gold text-center text-sm">
                  Thank you for your message. We&apos;ll be in touch soon!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
