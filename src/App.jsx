import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import AppointmentModal from './components/AppointmentModal';

import Home from './pages/Home';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import WorkflowPage from './pages/WorkflowPage';
import TestimonialsPage from './pages/TestimonialsPage';
import InfrastructurePage from './pages/InfrastructurePage';
import EmergencyPage from './pages/EmergencyPage';

import DoctorsListing from './pages/DoctorsListing';
import DoctorProfile from './pages/DoctorProfile';
import ServicesListing from './pages/ServicesListing';
import ServiceDetail from './pages/ServiceDetail';
import SpecialitiesListing from './pages/SpecialitiesListing';
import SpecialityDetail from './pages/SpecialityDetail';
import Gallery from './pages/Gallery';
import BlogListing from './pages/BlogListing';
import BlogPostDetail from './pages/BlogPostDetail';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import HtmlSitemap from './pages/HtmlSitemap';
import XmlSitemap from './pages/XmlSitemap';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [targetDoctor, setTargetDoctor] = useState('');
  const [targetService, setTargetService] = useState('');

  const handleOpenAppointment = (doctorName = '', serviceTitle = '') => {
    setTargetDoctor(doctorName);
    setTargetService(serviceTitle);
    setAppointmentModalOpen(true);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar onOpenAppointment={handleOpenAppointment} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/about" element={<About onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/why-choose-us" element={<WhyChooseUs onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/workflow" element={<WorkflowPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            
            <Route path="/doctors" element={<DoctorsListing onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/doctors/:doctorId" element={<DoctorProfile onOpenAppointment={handleOpenAppointment} />} />
            
            <Route path="/services" element={<ServicesListing onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/services/:serviceId" element={<ServiceDetail onOpenAppointment={handleOpenAppointment} />} />
            
            <Route path="/specialities" element={<SpecialitiesListing onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/specialities/:id" element={<SpecialityDetail onOpenAppointment={handleOpenAppointment} />} />
            
            <Route path="/gallery" element={<Gallery />} />
            
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogPostDetail onOpenAppointment={handleOpenAppointment} />} />
            
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Contact />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            
            <Route path="/sitemap.html" element={<HtmlSitemap />} />
            <Route path="/sitemap.xml" element={<XmlSitemap />} />
            
            <Route path="*" element={<Home onOpenAppointment={handleOpenAppointment} />} />
          </Routes>
        </main>

        <Footer onOpenAppointment={handleOpenAppointment} />
        
        <MobileStickyBar onOpenAppointment={handleOpenAppointment} />

        <AppointmentModal 
          isOpen={appointmentModalOpen}
          onClose={() => setAppointmentModalOpen(false)}
          initialDoctor={targetDoctor}
          initialService={targetService}
        />
      </div>
    </Router>
  );
}
