import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <div>
      <SEO 
        title="Privacy Policy | New Life Diagnostic Centre & Polyclinic"
        description="Privacy policy and data protection policies at New Life Diagnostic Centre Chaibasa."
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy', path: '/privacy-policy' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="section-title" style={{ textAlign: 'left' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Last Updated: July 2026</p>

          <div style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--primary)', marginTop: '24px', marginBottom: '12px' }}>1. Information We Collect</h2>
            <p>At New Life Diagnostic Centre &amp; Polyclinic, we collect essential patient information required to deliver diagnostic services and doctor consultations. This includes full name, contact number, age, gender, address (for home collection), and medical history relevant to your tests.</p>

            <h2 style={{ fontSize: '20px', color: 'var(--primary)', marginTop: '24px', marginBottom: '12px' }}>2. How We Protect Your Medical Data</h2>
            <p>All diagnostic test results and medical records are maintained in strict confidentiality. Reports are delivered digitally only to authorized patient phone numbers or emails using encrypted PDF links.</p>

            <h2 style={{ fontSize: '20px', color: 'var(--primary)', marginTop: '24px', marginBottom: '12px' }}>3. Third-Party Sharing</h2>
            <p>We do NOT sell, rent, or trade patient personal data to third parties. Data is shared exclusively with treating physicians upon patient consent.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
