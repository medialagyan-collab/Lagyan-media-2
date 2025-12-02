import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Rocket className="text-black w-5 h-5" />
                </div>
                <span className="font-bold text-2xl tracking-tighter text-white">
                LAGYAN<span className="text-gray-400">MEDIA</span>
                </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your partner in digital growth. We build brands, stories, and experiences that last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Booking</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                    <span>38/23 Sector 14, Part 2,<br/>Karnal, Near Gurudwara</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                    <a href="tel:+918930174104">+91 8930174104</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                    <a href="mailto:lagyanmedia@outlook.com">lagyanmedia@outlook.com</a>
                </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
                <a 
                    href="https://www.instagram.com/lagyanmedia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/harsh-kumar1234/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Lagyan Media. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;