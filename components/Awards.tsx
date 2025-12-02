import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, ShieldCheck } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: "Best Digital Agency",
    issuer: "Business Excellence Karnal",
    year: "2023",
    icon: Trophy,
    description: "Awarded for outstanding contribution to local business digitization and growth."
  },
  {
    id: 2,
    title: "Top Rated Service",
    issuer: "Client Choice Awards",
    year: "2024",
    icon: Star,
    description: "Consistently maintained a 5-star rating across all client review platforms."
  },
  {
    id: 3,
    title: "Innovation in Design",
    issuer: "Creative Web Summit",
    year: "2023",
    icon: Award,
    description: "Recognized for cutting-edge UI/UX methodologies and accessible design."
  },
  {
    id: 4,
    title: "Certified Partner",
    issuer: "Global Marketing Network",
    year: "2024",
    icon: ShieldCheck,
    description: "Verified expertise in Advanced SEO and Performance Marketing campaigns."
  }
];

const Awards: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-blue-400 font-bold tracking-wider text-sm uppercase"
          >
            Excellence & Trust
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mt-2 mb-6"
          >
            AWARD WINNING <br /> <span className="text-gray-500">PERFORMANCE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <award.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-bold text-gray-500 px-2 py-1 bg-white/5 rounded-full">{award.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
              <p className="text-sm text-blue-400 mb-3">{award.issuer}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;