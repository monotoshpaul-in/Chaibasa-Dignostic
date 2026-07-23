import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Scan, UserCheck, ShieldCheck, Award, Clock, HeartPulse, 
  FlaskConical, CheckCircle2, Star, Sparkles 
} from 'lucide-react';
import { generateClinicSchema } from '../data/clinicData';

export default function WhyChooseUs({ onOpenAppointment }) {
  const trustPoints = [
    { title: "Advanced Diagnostic Technology", desc: "Automated blood analyzers, 3D/4D ultrasound, and digital ECG machines for pin-point accuracy.", icon: Scan },
    { title: "Senior Medical Specialists", desc: "Consult seasoned cardiologists, physicians, surgeons, and gynecologists with 15+ years experience.", icon: UserCheck },
    { title: "NABL Standard Lab Quality", desc: "Strict quality control calibrations and double-tier verification by Chief Pathologist Dr. Priyanshu Das.", icon: ShieldCheck },
    { title: "Affordable & Transparent Pricing", desc: "Highest diagnostic quality at competitive rates with up to 55% discount on health packages.", icon: Award },
    { title: "Instant Digital Reports", desc: "Receive high-resolution digital reports via WhatsApp & Email within 3 to 6 hours.", icon: Clock },
    { title: "Patient-First Healthcare", desc: "Courteous nursing staff, minimal lounge waiting time, and comfortable air-conditioned facilities.", icon: HeartPulse },
    { title: "Doorstep Home Sample Collection", desc: "Certified phlebotomists collect blood samples safely from your residence across Chaibasa.", icon: FlaskConical },
    { title: "Sterile & Safe Environment", desc: "Strict hygiene protocols, single-use sterile supplies, and continuous sanitization.", icon: CheckCircle2 }
  ];

  return (
    <div>
      <SEO 
        title="Why Choose Us | New Life Diagnostic Centre Chaibasa"
        description="Discover why New Life Diagnostic Centre & Polyclinic is Chaibasa's most trusted healthcare facility: NABL standard lab, senior doctors, same day reports, and home collection."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Why Choose Us', path: '/why-choose-us' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">
              <Sparkles size={14} /> Trust &amp; Excellence
            </span>
            <h1 className="section-title">Why Choose New Life Diagnostic &amp; Polyclinic</h1>
            <p className="section-subtitle">
              We bring high-end private hospital standards, advanced laboratory automation, and senior consultant doctors to Chaibasa.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '30px', marginBottom: '60px' }}>
            {trustPoints.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '8px' }}>{item.title}</h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', borderRadius: '32px', padding: '48px', color: '#FFFFFF', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', color: '#FFFFFF', marginBottom: '16px' }}>Experience High-Precision Healthcare Today</h2>
            <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
              Book your diagnostic test or doctor consultation at Chaibasa's leading polyclinic.
            </p>
            <button onClick={() => onOpenAppointment()} className="btn btn-white btn-lg">
              Book Appointment Now
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
