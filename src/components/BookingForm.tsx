import { useState } from 'react';
import { supabase, Booking } from '../lib/supabase';
import { Send, CheckCircle, Mail, User, Phone, MessageSquare } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState<Booking>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('bookings')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Oops! Something went wrong. Please try again.');
      console.error('Error submitting booking:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Have questions or special requests? We'd love to hear from you!
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12">
            {success ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-800 mb-3">Message Sent!</h3>
                <p className="text-gray-600 text-lg">
                  Thanks for reaching out! We'll get back to you super soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition resize-none"
                    placeholder="Tell us what you're looking for or any questions you have..."
                  />
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-100 border-2 border-red-300 text-red-700 rounded-xl">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
