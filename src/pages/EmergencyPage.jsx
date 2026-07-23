import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Phone, AlertTriangle, Clock, MapPin, ShieldCheck, HeartPulse } from 'lucide-react';
import { clinicInfo, generateClinicSchema } from '../data/clinicData';

export default function EmergencyPage() {
  return (
    <div>
      <SEO 
        title="Emergency Hotline & Urgent Care | New Life Diagnostic Chaibasa"
        description="Urgent blood test, ECG, physician consultation hotline at New Life Polyclinic Chaibasa. Call +91 94313 88900."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Emergency', path: '/emergency' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          
          <div style={{ background: '#FEF2F2', border: '2px solid #FCA5A5', padding: '40px', borderRadius: '32px', textAlign: 'center', marginBottom: '40px' }}>
            <AlertTriangle size={56} color="#DC2626" style={{ margin: '0 auto 16px auto' }} />
            <span style={{ background: '#DC2626', color: '#FFFFFF', padding: '4px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: 700 }}>
              URGENT MEDICAL ASSISTANCE
            </span>
            <h1 style={{ fontSize: '32px', color: '#991B1B', marginTop: '12px', marginBottom: '16px' }}>
              Emergency Diagnostic &amp; Physician Hotline
            </h1>
            <p style={{ fontSize: '16px', color: '#7F1D1D', lineHeight: '1.7', marginBottom: '24px' }}>
              For acute non-critical medical needs, urgent STAT blood tests, high fever observation, or immediate 12-lead ECG recording in Chaibasa.
            </p>

            <a href={`tel:${clinicInfo.phonePrimary}`} className="btn" style={{ background: '#DC2626', color: '#FFFFFF', fontSize: '20px', padding: '18px 36px', borderRadius: '50px' }}>
              <Phone size={24} /> CALL EMERGENCY: {clinicInfo.phonePrimary}
            </a>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '16px' }}>
              Services Available for Urgent Cases
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', color: 'var(--text-main)', marginBottom: '24px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <HeartPulse size={20} color="var(--primary)" /> STAT Blood Sugar &amp; Cardiac Enzymes (Troponin / CK-MB)
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <HeartPulse size={20} color="var(--primary)" /> Immediate 12-Lead Digital ECG &amp; Rhythm Check
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <HeartPulse size={20} color="var(--primary)" /> Day Care Nebulization &amp; IV Hydration Unit
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <HeartPulse size={20} color="var(--primary)" /> Urgent Ultrasound for Abdominal Pain (Subject to radiologist schedule)
              </li>
            </ul>

            <div style={{ background: 'var(--primary-light)', padding: '20px', borderRadius: '16px', fontSize: '14px', color: 'var(--primary)' }}>
              📍 <strong>Location:</strong> Main Road, Opp. Sadar Hospital, Chaibasa • Open Mon-Sat 7 AM - 8 PM
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
