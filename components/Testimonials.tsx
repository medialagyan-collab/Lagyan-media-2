import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Lagyan Media completely revamped our digital presence. Their understanding of the Indian market coupled with modern design sensibilities helped us increase our leads by 200%.",
    name: "Aarav Patel",
    role: "CEO",
    company: "TechFlow India",
    location: "Mumbai, India"
  },
  {
    id: 2,
    quote: "Working with Lagyan Media was a game-changer for our ecommerce store. The site is fast, beautiful, and our conversion rates have never been higher. Highly recommended!",
    name: "Jessica Reynolds",
    role: "Marketing Director",
    company: "Urban Vogue NY",
    location: "New York, USA"
  },
  {
    id: 3,
    quote: "Professionalism at its best. The team managed our social media campaigns flawlessly, bringing our organic products to a wider audience in Karnal and beyond.",
    name: "Vikram Singh",
    role: "Founder",
    company: "GreenHarvest Organics",
    location: "Karnal, India"
  },
  {
    id: 4,
    quote: "Exceptional service. They delivered a robust corporate website that perfectly represents our logistics brand across North America. The attention to detail is unmatched.",
    name: "Liam Thompson",
    role: "COO",
    company: "NorthPeak Logistics",
    location: "Toronto, Canada"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
       {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">CLIENTS SAY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Trusted by businesses across the globe. Here's how we've helped our partners grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-neutral-900/50 p-8 rounded-3xl border border-white/10 hover:bg-neutral-900 transition-colors relative group"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/10 group-hover:text-white/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-lg border border-white/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  <p className="text-xs text-gray-600 mt-1">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;