import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { doctorsData, servicesData, specialitiesData } from '../data/clinicData';

export default function HtmlSitemap() {
  return (
    <div>
      <SEO 
        title="HTML Sitemap | New Life Diagnostic Centre Chaibasa"
        description="Comprehensive sitemap of all pages, diagnostic services, doctor profiles, specialities, and blog posts at New Life Polyclinic."
      />

      <Breadcrumbs items={[{ label: 'HTML Sitemap', path: '/sitemap.html' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left' }}>HTML Sitemap</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Explore all pages and links of New Life Diagnostic Centre &amp; Polyclinic website.</p>

          <div className="grid-3">
            {/* Core Pages */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h2 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>Main Pages</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                <li><Link to="/workflow">Patient Workflow</Link></li>
                <li><Link to="/testimonials">Patient Reviews</Link></li>
                <li><Link to="/infrastructure">Infrastructure</Link></li>
                <li><Link to="/emergency">Emergency Hotline</Link></li>
                <li><Link to="/doctors">Doctors Directory</Link></li>
                <li><Link to="/services">Diagnostic Services</Link></li>
                <li><Link to="/specialities">Medical Specialities</Link></li>
                <li><Link to="/gallery">Photo Gallery</Link></li>
                <li><Link to="/blog">Health Blog</Link></li>
                <li><Link to="/faq">Frequently Asked Questions</Link></li>
                <li><Link to="/contact">Contact &amp; Map</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                <li><Link to="/disclaimer">Medical Disclaimer</Link></li>
              </ul>
            </div>

            {/* Doctor Profile Pages */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h2 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>Doctor Profiles</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                {doctorsData.map(doc => (
                  <li key={doc.id}>
                    <Link to={`/doctors/${doc.id}`}>{doc.name} ({doc.speciality})</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic Services Pages */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h2 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>Diagnostic Services</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                {servicesData.map(srv => (
                  <li key={srv.id}>
                    <Link to={`/services/${srv.id}`}>{srv.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
