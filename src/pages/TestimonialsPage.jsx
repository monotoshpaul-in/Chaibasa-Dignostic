import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { testimonialsData, clinicInfo, generateClinicSchema } from '../data/clinicData';

export default function TestimonialsPage() {
  return (
    <div>
      <SEO 
        title="Patient Reviews & Testimonials | New Life Diagnostic Chaibasa"
        description="Read patient reviews and ratings for New Life Diagnostic Centre & Polyclinic in Chaibasa. Over 380+ 5-star Google reviews."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Patient Testimonials', path: '/testimonials' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">
              ⭐ 4.9 / 5.0 Rating (380+ Reviews)
            </span>
            <h1 className="section-title">What Patients Say About New Life Polyclinic</h1>
            <p className="section-subtitle">
              Authentic reviews and patient stories from families across Chaibasa and West Singhbhum.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '30px', marginBottom: '60px' }}>
            {testimonialsData.map((t) => (
              <div key={t.id} className="glass-card" style={{ padding: '36px', position: 'relative' }}>
                <Quote size={40} color="var(--primary-light)" style={{ position: 'absolute', top: '24px', right: '24px' }} />
                
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <p style={{ fontSize: '16px', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '24px', fontStyle: 'italic' }}>
                  "{t.comment}"
                </p>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '4px' }}>{t.name}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📍 {t.location} • Verified Patient ({t.date})</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
