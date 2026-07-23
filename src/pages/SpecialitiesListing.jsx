import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Stethoscope } from 'lucide-react';
import { specialitiesData, generateClinicSchema } from '../data/clinicData';

export default function SpecialitiesListing({ onOpenAppointment }) {
  return (
    <div>
      <SEO 
        title="Medical Specialities in Chaibasa | Cardiology, Gynecology, Orthopedics, Medicine"
        description="Explore medical departments at New Life Polyclinic Chaibasa: Cardiology, General Medicine, Gynecology, Orthopedics, Pathology, Surgery, Pediatrics, and Neurology."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Specialities', path: '/specialities' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Multispeciality Departments</span>
            <h1 className="section-title">Medical Specialities at New Life Polyclinic</h1>
            <p className="section-subtitle">
              Comprehensive clinical departments led by experienced specialist consultants in Chaibasa.
            </p>
          </div>

          <div className="grid-3">
            {specialitiesData.map(spec => (
              <div key={spec.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <img 
                      src={spec.image} 
                      alt={spec.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'var(--transition-normal)' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,74,139,0.7) 0%, transparent 60%)' }} />
                    <div style={{ position: 'absolute', bottom: '12px', left: '16px', color: '#FFFFFF', fontWeight: 700, fontSize: '18px' }}>
                      {spec.name}
                    </div>
                  </div>

                  <div style={{ padding: '24px' }}>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                      {spec.desc}
                    </p>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)', marginBottom: '16px' }}>
                      👨‍⚕️ {spec.doctorsCount}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 24px 24px 24px', display: 'flex', gap: '10px' }}>
                  <Link to={`/specialities/${spec.id}`} className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                    Overview
                  </Link>
                  <button onClick={() => onOpenAppointment()} className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                    Book OPD
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
