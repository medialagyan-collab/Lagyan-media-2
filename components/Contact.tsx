import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, Wand2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { generateProjectBrief } from '../services/geminiService';
import { LoadingState } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing',
    message: '',
  });

  const [aiPrompt, setAiPrompt] = useState('');
  const [aiState, setAiState] = useState<LoadingState>(LoadingState.IDLE);
  const [formStatus, setFormStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAiGeneration = async () => {
    if (!aiPrompt.trim()) return;
    
    setAiState(LoadingState.LOADING);
    const generatedMessage = await generateProjectBrief(aiPrompt);
    
    setFormData(prev => ({ ...prev, message: generatedMessage }));
    setAiState(LoadingState.SUCCESS);
    
    // Reset success state after a moment
    setTimeout(() => setAiState(LoadingState.IDLE), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(LoadingState.LOADING);

    try {
      const response = await fetch("https://formspree.io/f/xnnevbnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus(LoadingState.SUCCESS);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Digital Marketing',
          message: '',
        });
        // Clear success message after 5 seconds
        setTimeout(() => setFormStatus(LoadingState.IDLE), 5000);
      } else {
        setFormStatus(LoadingState.ERROR);
        setTimeout(() => setFormStatus(LoadingState.IDLE), 5000);
      }
    } catch (error) {
      console.error("Submission error", error);
      setFormStatus(LoadingState.ERROR);
      setTimeout(() => setFormStatus(LoadingState.IDLE), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Text and Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              LET'S BUILD <br />
              SOMETHING <br />
              <span className="text-gray-500">GREAT.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Ready to take your brand to the next level? Fill out the form or reach out to us directly. We are currently accepting new clients for this quarter.
            </p>
            
            <div className="space-y-6">
                <div className="p-6 bg-black rounded-2xl border border-white/10">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        AI-Powered Assistance
                    </h4>
                    <p className="text-sm text-gray-400">
                        Not sure what to say? Use our AI helper in the form to draft a professional inquiry based on your simple keywords.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus === LoadingState.LOADING}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus === LoadingState.LOADING}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all disabled:opacity-50"
                        placeholder="+91 8930174104"
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === LoadingState.LOADING}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service</label>
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    disabled={formStatus === LoadingState.LOADING}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all appearance-none disabled:opacity-50"
                >
                    <option value="Website Development" className="bg-black">Website Development</option>
                    <option value="Social Media Management" className="bg-black">Social Media Management</option>
                    <option value="Digital Marketing" className="bg-black">Digital Marketing</option>
                    <option value="Ecommerce Solutions" className="bg-black">Ecommerce Solutions</option>
                    <option value="Other" className="bg-black">Other</option>
                </select>
              </div>

              {/* AI Message Generator */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 border-dashed">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex justify-between items-center">
                    <span>Quick Draft with AI</span>
                    <Wand2 className="w-3 h-3 text-purple-400" />
                </label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="e.g., I need a shoe store website..."
                        disabled={aiState === LoadingState.LOADING || formStatus === LoadingState.LOADING}
                        className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none disabled:opacity-50"
                    />
                    <button 
                        type="button"
                        onClick={handleAiGeneration}
                        disabled={aiState === LoadingState.LOADING || formStatus === LoadingState.LOADING}
                        className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 whitespace-nowrap"
                    >
                        {aiState === LoadingState.LOADING ? 'Generating...' : 'Auto-Write'}
                    </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    disabled={formStatus === LoadingState.LOADING}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all resize-none disabled:opacity-50"
                    placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === LoadingState.LOADING}
                className={`w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group ${
                    formStatus === LoadingState.SUCCESS 
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {formStatus === LoadingState.LOADING ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : formStatus === LoadingState.SUCCESS ? (
                    <>
                        Message Sent! <CheckCircle className="w-5 h-5" />
                    </>
                ) : formStatus === LoadingState.ERROR ? (
                   <>
                        Try Again <AlertCircle className="w-5 h-5" />
                   </>
                ) : (
                    <>
                        Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
              </button>

              {formStatus === LoadingState.ERROR && (
                  <p className="text-red-400 text-sm text-center mt-2">
                      Something went wrong. Please email us directly at lagyanmedia@outlook.com
                  </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;