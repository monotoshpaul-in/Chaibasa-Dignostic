import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Calendar, Menu, X } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Navbar({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Services', path: '/services' },
    { label: 'Specialities', path: '/specialities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header-wrapper">
      
      {/* Top Banner Notice - Clean wrapping on mobile */}
      <div style={{ background: 'var(--primary)', color: '#FFFFFF', fontSize: '11px', padding: '6px 12px', textAlign: 'center', width: '100%' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            📍 <strong>New Life Polyclinic:</strong> Main Road, Opp. Sadar Hospital, Chaibasa • Open: 7 AM - 8 PM
          </div>
          <div style={{ display: 'flex', gap: '16px' }} className="hide-mobile">
            <a href={`tel:${clinicInfo.phonePrimary}`} style={{ color: '#FFFFFF' }}>📞 {clinicInfo.phonePrimary}</a>
            <a href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>💬 WhatsApp Desk</a>
          </div>
        </div>
      </div>

      <div className="container header-container">
        {/* Official Logo */}
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="New Life Diagnostic Centre & Polyclinic Logo" className="logo-img" />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hide-mobile">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          <a 
            href={`https://wa.me/${clinicInfo.whatsapp}?text=Hello%20New%20Life%20Diagnostic%2C%20I%20want%20to%20enquire%20about%20a%20test%20/%20doctor%20appointment`} 
            target="_blank" 
            rel="noreferrer"
            className="action-icon-btn action-whatsapp"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={18} />
          </a>

          <a 
            href={`tel:${clinicInfo.phonePrimary}`} 
            className="action-icon-btn action-call"
            title="Call Clinic Now"
          >
            <Phone size={18} />
          </a>

          <button 
            onClick={() => onOpenAppointment()} 
            className="btn btn-primary btn-sm hide-mobile"
          >
            <Calendar size={15} /> Book Appointment
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: '20px',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 9999
        }} className="animate-fade-in">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontWeight: isActive(link.path) ? 700 : 500,
                    color: isActive(link.path) ? 'var(--primary)' : 'var(--text-main)',
                    background: isActive(link.path) ? 'var(--primary-light)' : 'transparent'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '16px' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }} 
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Calendar size={16} /> Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
