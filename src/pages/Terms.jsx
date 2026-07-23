import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Terms() {
  return (
    <div>
      <SEO 
        title="Terms & Conditions | New Life Diagnostic Centre & Polyclinic"
        description="Terms of service and patient guidelines at New Life Diagnostic Centre Chaibasa."
      />

      <Breadcrumbs items={[{ label: 'Terms & Conditions', path: '/terms' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="section-title" style={{ textAlign: 'left' }}>Terms &amp; Conditions</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Last Updated: July 2026</p>

          <div style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--primary)', marginTop: '24px', marginBottom: '12px' }}>1. Diagnostic Service Terms</h2>
            <p>Diagnostic reports are generated based on testing samples provided. Turnaround times indicated are estimates and may vary slightly during re-verification procedures.</p>

            <h2 style={{ fontSize: '20px', color: 'var(--primary)', marginTop: '24px', marginBottom: '12px' }}>2. Doctor Appointments</h2>
            <p>Appointments are subject to doctor availability. In case of emergency surgeries or hospital calls, appointment slots may be rescheduled with prior notice.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
