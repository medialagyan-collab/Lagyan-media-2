import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">Boost your growth with data-driven strategies</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
              EXCELLENCE
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Lagyan Media transforms brands through cutting-edge website development, 
            social media management, and robust ecommerce solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-black bg-white hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-bold rounded-full text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>

          {/* Stats / Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 w-full">
             <div className="text-center">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Clients</p>
             </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white">120+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects</p>
             </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Support</p>
             </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Growth</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;