import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { CheckCircle2, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';
import { healthPackagesData, clinicInfo, generateClinicSchema } from '../data/clinicData';

export default function HealthPackages({ onOpenAppointment }) {
  return (
    <div>
      <SEO 
        title="Health Checkup Packages in Chaibasa | Up to 55% OFF Full Body Checkups"
        description="Save up to 55% on full body health checkup packages in Chaibasa: Executive Package, Cardiac Shield, Women's Care, Diabetes Control, and Senior Citizen Health Packages."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Health Packages', path: '/health-packages' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">
              <Sparkles size={14} /> Free Home Sample Collection Included
            </span>
            <h1 className="section-title">Preventive Health &amp; Full Body Checkup Packages</h1>
            <p className="section-subtitle">
              Comprehensive blood, heart, kidney, liver, thyroid, and vitamin screening packages designed for early disease detection in Chaibasa.
            </p>
          </div>

          <div className="grid-3">
            {healthPackagesData.map(pkg => (
              <div key={pkg.id} className="glass-card" style={{ padding: '32px', borderTop: '5px solid var(--primary)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="badge badge-teal" style={{ position: 'absolute', top: '16px', right: '16px' }}>
                    {pkg.discount}
                  </span>

                  <h2 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '6px', paddingRight: '60px' }}>{pkg.title}</h2>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>{pkg.tagline}</p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '24px', background: 'var(--primary-light)', padding: '16px', borderRadius: '14px' }}>
                    <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--secondary-dark)' }}>{pkg.price}</span>
                    <span style={{ fontSize: '18px', textDecoration: 'line-through', color: 'var(--text-light)' }}>{pkg.originalPrice}</span>
                  </div>

                  <h3 style={{ fontSize: '16px', color: 'var(--primary)', marginBottom: '14px' }}>Included Parameters ({pkg.testsCount}):</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', fontSize: '13px' }}>
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button onClick={() => onOpenAppointment('', pkg.title)} className="btn btn-primary" style={{ width: '100%' }}>
                    Book {pkg.title}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px' }}>
                    🚚 Free Doorstep Sample Collection Available
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
