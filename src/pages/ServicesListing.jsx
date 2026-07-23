import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { FlaskConical, Clock, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { servicesData, clinicInfo, generateClinicSchema } from '../data/clinicData';

export default function ServicesListing({ onOpenAppointment }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(srv => 
    srv.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SEO 
        title="Services | New Life Diagnostic Centre Chaibasa"
        description="Full catalog of high-precision diagnostic services in Chaibasa: blood tests, 3D ultrasound, 2D echo, ECG, PFT, physiotherapy, and doorstep sample collection."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Services', path: '/services' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Full Healthcare Catalog</span>
            <h1 className="section-title">Diagnostic &amp; Clinical Services</h1>
            <p className="section-subtitle">
              Advanced pathology lab testing, 3D/4D ultrasound, 2D echo, digital X-ray, ECG, and specialized clinical care under NABL standard quality controls.
            </p>
          </div>

          {/* Search bar */}
          <div style={{ maxWidth: '500px', margin: '0 auto 32px auto', position: 'relative', width: '100%' }}>
            <input 
              type="text" 
              placeholder="Search diagnostic test or scan (e.g. Blood, Echo, USG)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 20px 12px 44px',
                borderRadius: '50px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>

          <div className="grid-3">
            {filteredServices.map(srv => (
              <div key={srv.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'var(--transition-normal)' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,74,139,0.75) 0%, transparent 60%)' }} />
                    <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', color: '#FFFFFF', fontWeight: 700, fontSize: '17px' }}>
                      {srv.title}
                    </div>
                  </div>

                  <div style={{ padding: '20px' }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '14px' }}>
                      {srv.shortDesc}
                    </p>

                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--secondary-dark)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} /> Turnaround: {srv.turnaround}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 20px 20px 20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to={`/services/${srv.id}`} className="btn btn-outline btn-sm" style={{ flex: 1, minWidth: '90px', justifyContent: 'center' }}>
                    Details
                  </Link>
                  <button onClick={() => onOpenAppointment('', srv.title)} className="btn btn-primary btn-sm" style={{ flex: 1, minWidth: '90px', justifyContent: 'center' }}>
                    Book Test
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
