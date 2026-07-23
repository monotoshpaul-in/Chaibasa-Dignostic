import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { clinicInfo, servicesData, doctorsData } from '../data/clinicData';

export default function Footer({ onOpenAppointment }) {
  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Upper CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          borderRadius: '24px',
          padding: '40px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '60px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '50px', fontSize: '13px', fontWeight: 600 }}>
              Need Urgent Blood Test or Doctor Consultation?
            </span>
            <h3 style={{ color: '#FFFFFF', fontSize: '26px', marginTop: '8px' }}>
              Your Health, Our Priority in Chaibasa
            </h3>
            <p style={{ opacity: 0.9, fontSize: '14px', marginTop: '4px' }}>
              Free Home Sample Collection Available • Same Day Digital Reports
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => onOpenAppointment()} className="btn btn-white">
              Book Appointment Now
            </button>
            <a href={`tel:${clinicInfo.phonePrimary}`} className="btn btn-outline" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>
              Call {clinicInfo.phonePrimary}
            </a>
          </div>
        </div>

        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col">
            <img src="/logo.png" alt="New Life Diagnostic" style={{ maxHeight: '70px', width: 'auto', background: '#FFFFFF', padding: '8px 16px', borderRadius: '12px', marginBottom: '20px', objectFit: 'contain' }} />
            <p style={{ fontSize: '14px', color: '#A0AEC0', lineHeight: '1.7', marginBottom: '20px' }}>
              New Life Diagnostic Centre &amp; Polyclinic is Chaibasa’s leading high-end private healthcare facility offering automated pathology lab testing, 3D ultrasound, 2D Echo, ECG, physiotherapy, and specialist doctor consultations under one roof.
            </p>
            <div style={{ display: 'flex', gap: '10px', fontSize: '12px', color: '#CBD5E0' }}>
              <ShieldCheck size={18} color="var(--secondary)" /> NABL Standard Aligned • ISO Certified Facility
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Explore Pages</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/why-choose-us">Why Choose Us</Link></li>
              <li><Link to="/workflow">Patient Workflow</Link></li>
              <li><Link to="/testimonials">Patient Reviews</Link></li>
              <li><Link to="/infrastructure">Infrastructure</Link></li>
              <li><Link to="/emergency">Emergency Hotline</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/services">Diagnostic Services</Link></li>
              <li><Link to="/specialities">Medical Specialities</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/blog">Health Blog</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/contact">Contact &amp; Map</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              {servicesData.slice(0, 7).map(srv => (
                <li key={srv.id}>
                  <Link to={`/services/${srv.id}`}>{srv.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Specialist Doctors */}
          <div className="footer-col">
            <h4>Specialists</h4>
            <ul className="footer-links">
              {doctorsData.map(doc => (
                <li key={doc.id}>
                  <Link to={`/doctors/${doc.id}`}>{doc.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="footer-col">
            <h4>Contact Chaibasa</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#A0AEC0' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span>{clinicInfo.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span>{clinicInfo.phonePrimary} / {clinicInfo.phoneSecondary}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span>{clinicInfo.email}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span>{clinicInfo.workingHours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Sitemap */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', paddingBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13px', color: '#718096' }}>
          <Link to="/privacy-policy" style={{ color: '#A0AEC0' }}>Privacy Policy</Link> | 
          <Link to="/terms" style={{ color: '#A0AEC0' }}>Terms &amp; Conditions</Link> | 
          <Link to="/disclaimer" style={{ color: '#A0AEC0' }}>Medical Disclaimer</Link> | 
          <Link to="/sitemap.html" style={{ color: '#A0AEC0' }}>HTML Sitemap</Link> | 
          <Link to="/sitemap.xml" style={{ color: '#A0AEC0' }}>XML Sitemap</Link>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} New Life Diagnostic Centre &amp; Polyclinic, Chaibasa. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Designed with <Heart size={14} color="#E53E3E" fill="#E53E3E" /> for Superior Patient Care
          </div>
        </div>

      </div>
    </footer>
  );
}
