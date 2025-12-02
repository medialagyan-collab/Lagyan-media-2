import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Awards />
        <div id="about" className="py-24 px-4 text-center border-t border-white/5 bg-neutral-900/50">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
             <p className="text-gray-400 text-lg">
                Lagyan Media is a premier digital agency in Karnal, dedicated to elevating brands through comprehensive digital solutions. 
                From responsive web design to strategic social media campaigns, we bridge the gap between your brand and your audience.
             </p>
           </div>
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;