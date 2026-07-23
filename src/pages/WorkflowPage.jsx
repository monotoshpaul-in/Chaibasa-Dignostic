import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Calendar } from 'lucide-react';
import { workflowSteps, generateClinicSchema } from '../data/clinicData';

export default function WorkflowPage({ onOpenAppointment }) {
  return (
    <div>
      <SEO 
        title="Patient Journey & Workflow | New Life Diagnostic Chaibasa"
        description="Step-by-step patient journey at New Life Polyclinic Chaibasa: Appointment booking, sample collection, automated testing, doctor verification, and report delivery."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Patient Workflow', path: '/workflow' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Seamless Process</span>
            <h1 className="section-title">6-Step Patient Visit &amp; Testing Workflow</h1>
            <p className="section-subtitle">
              We have designed a frictionless, step-by-step workflow to ensure maximum convenience, zero wait time, and reliable results.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '30px', marginBottom: '60px' }}>
            {workflowSteps.map((wf) => (
              <div key={wf.step} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img src={wf.image} alt={wf.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,74,139,0.8) 0%, transparent 60%)' }} />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    fontSize: '24px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    background: 'var(--secondary)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {wf.step}
                  </div>
                  <div style={{ position: 'absolute', bottom: '12px', left: '16px', color: '#FFFFFF', fontWeight: 700, fontSize: '18px' }}>
                    {wf.title}
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => onOpenAppointment()} className="btn btn-primary btn-lg">
              <Calendar size={18} /> Start Step 1: Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
