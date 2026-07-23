import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Scan, FlaskConical, ShieldCheck, Cpu, Award } from 'lucide-react';
import { generateClinicSchema } from '../data/clinicData';

export default function InfrastructurePage({ onOpenAppointment }) {
  return (
    <div>
      <SEO 
        title="Infrastructure & Technology | New Life Diagnostic Chaibasa"
        description="Explore modern diagnostic equipment, automated blood analyzers, 3D ultrasound, and air-conditioned day care beds at New Life Polyclinic Chaibasa."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Infrastructure', path: '/infrastructure' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">State-of-the-Art Facilities</span>
            <h1 className="section-title">Diagnostic Infrastructure &amp; Medical Equipment</h1>
            <p className="section-subtitle">
              We invest in high-end medical technology and sterile laboratory equipment to ensure accurate diagnostics.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <img 
                src="/assets/lab_suite.jpg" 
                alt="Automated Pathology Laboratory at New Life Diagnostic Chaibasa" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '16px' }}>
                Automated Pathology Laboratory
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                Our clinical biochemistry and hematology units feature fully automated analyzer systems capable of processing hundreds of sample parameters per hour with zero human error.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-main)' }}>
                <li>✅ Chemiluminescence Immunoassay (CLIA) for hormonal assays</li>
                <li>✅ 5-Part Differential Hematology Cell Counter</li>
                <li>✅ Automated Clinical Biochemistry Analyzer</li>
                <li>✅ Cold-chain temperature monitored sample transport</li>
              </ul>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '16px' }}>
                Digital Radiology &amp; Ultrasound Suite
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                Our imaging section is equipped with high-frequency 3D/4D ultrasound systems, color Doppler, 12-lead digital ECG recording, and computerized spirometry (PFT).
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-main)' }}>
                <li>✅ High-density multi-frequency transducers for deep abdominal scans</li>
                <li>✅ Color Doppler for peripheral vascular and cardiac echo studies</li>
                <li>✅ High-frequency digital X-Ray with instant film output</li>
                <li>✅ Computerized PFT spirometer for lung capacity audit</li>
              </ul>
            </div>

            <div>
              <img 
                src="/assets/reception.jpg" 
                alt="New Life Polyclinic Waiting Lounge Chaibasa" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => onOpenAppointment()} className="btn btn-primary btn-lg">
              Book Diagnostic Scan / Test
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
