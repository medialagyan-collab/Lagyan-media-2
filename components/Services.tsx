import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Share2, BarChart3, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, high-performance websites built with modern technologies like React and Tailwind to ensure your brand stands out.',
    icon: Globe,
  },
  {
    id: 'smm',
    title: 'Social Media Mgmt',
    description: 'Engaging content strategies and community management across Instagram, LinkedIn, and more to grow your loyal following.',
    icon: Share2,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven SEO, PPC, and content marketing campaigns designed to increase conversion rates and ROI.',
    icon: BarChart3,
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Solutions',
    description: 'Scalable online stores with seamless payment integrations and user-centric design to boost your sales.',
    icon: ShoppingBag,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide a comprehensive suite of digital services to help your business thrive in the modern landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-8 right-8 text-gray-600 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;