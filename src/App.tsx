/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import RabCalculator from './components/RabCalculator';
import InteriorMepCalculator from './components/InteriorMepCalculator';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import ContactSurvey from './components/ContactSurvey';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="root-app-layout" className="bg-white min-h-screen text-gray-800 selection:bg-[#C89A2B] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Hero Interactive Slideshow */}
      <Hero />

      {/* 3. About Section / Tentang Kami */}
      <About />

      {/* 4. Core Corporate Services */}
      <Services />

      {/* 5. MIDDLE SECTION: Interactive Cost Estimators */}
      <div id="middle-calculators-container" className="relative">
        {/* Dynamic Room Dimension & Wall Visualizer */}
        <RabCalculator />
        
        {/* Pro 5-Step Stepper Interior & MEP Estimator */}
        <InteriorMepCalculator />
      </div>

      {/* 6. Portfolio Showcase (Filtered Masonry Grid + Lightbox) */}
      <Portfolio />

      {/* 7. Process Timeline (7 Staggered Stages) */}
      <Process />

      {/* 8. 6-Client Testimonial Carousel */}
      <Testimonial />

      {/* 9. Interactive FAQ Accordion block */}
      <Faq />

      {/* 10. Multi-Field Survey & WhatsApp Redirector Form */}
      <ContactSurvey />

      {/* 11. Footer with contact cards & SEO keywords list */}
      <Footer />
    </div>
  );
}
