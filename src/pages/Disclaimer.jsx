import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Disclaimer() {
  return (
    <div>
      <SEO 
        title="Medical Disclaimer | New Life Diagnostic Centre & Polyclinic"
        description="Medical disclaimer for content and diagnostic services provided by New Life Polyclinic Chaibasa."
      />

      <Breadcrumbs items={[{ label: 'Medical Disclaimer', path: '/disclaimer' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="section-title" style={{ textAlign: 'left' }}>Medical Disclaimer</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Last Updated: July 2026</p>

          <div style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
            <p>The information provided on this website, including blog articles, service descriptions, and FAQs, is for general educational purposes only and does NOT constitute formal medical advice, diagnosis, or treatment.</p>
            <p style={{ marginTop: '16px' }}>Always seek the advice of a qualified doctor or physician with any questions regarding a medical condition or report interpretation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
