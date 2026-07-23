import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ShieldCheck, Award, Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { clinicInfo, generateClinicSchema } from '../data/clinicData';

export default function About({ onOpenAppointment }) {
  return (
    <div>
      <SEO 
        title="About Us | New Life Diagnostic Centre & Polyclinic Chaibasa"
        description="Learn about Chaibasa's leading healthcare facility, our mission, vision, NABL-aligned laboratory infrastructure, and senior medical specialists."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'About Us', path: '/about' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Our Legacy of Trust</span>
            <h1 className="section-title">Pioneering High-Precision Healthcare in Chaibasa</h1>
            <p className="section-subtitle">
              Combining world-class laboratory automation, digital imaging, and senior specialist doctor consultations under one modern roof.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <img 
                src="/assets/reception.jpg" 
                alt="New Life Polyclinic Reception Lounge" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '16px' }}>
                Our Healthcare Philosophy
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '16px' }}>
                At <strong>New Life Diagnostic Centre &amp; Polyclinic</strong>, we believe every patient deserves accurate, timely, and compassionate medical care. Founded in Chaibasa, our facility was established to eliminate the need for residents to travel to distant metro cities for reliable diagnostic reports and specialist OPD consultations.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px' }}>
                Our laboratory is equipped with state-of-the-art automated biochemistry, hematology, and chemiluminescence immunoassay analyzers. Every blood report undergoes multi-tier verification led by Chief Pathologist Dr. Priyanshu Das.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '15px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={20} color="var(--secondary)" /> NABL Standard Aligned Testing Protocols
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '15px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={20} color="var(--secondary)" /> ISO 9001:2015 Certified Diagnostic Facility
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '15px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={20} color="var(--secondary)" /> Doorstep Home Blood Sample Collection across Chaibasa
                </div>
              </div>
            </div>
          </div>

          {/* MISSION VISION VALUES */}
          <div className="grid-3" style={{ marginBottom: '80px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--primary)' }}>Our Mission</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                To provide high-precision, affordable, and accessible diagnostic and clinical services to every individual in Chaibasa and West Singhbhum using cutting-edge medical technology.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--secondary-light)', color: 'var(--secondary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--primary)' }}>Our Vision</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                To be recognized as the most trusted healthcare institution in South Jharkhand, renowned for medical integrity, diagnostic excellence, and patient safety.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Heart size={24} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--primary)' }}>Core Values</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Uncompromising diagnostic accuracy, patient empathy, ethical medical practice, continuous technological upgrades, and transparent pricing.
              </p>
            </div>
          </div>

          {/* INFRASTRUCTURE */}
          <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #083463 100%)', borderRadius: '32px', padding: '50px', color: '#FFFFFF' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: 600 }}>
                State-of-the-Art Infrastructure
              </span>
              <h2 style={{ fontSize: '32px', color: '#FFFFFF', marginTop: '12px', marginBottom: '20px' }}>
                Advanced Diagnostic Equipment &amp; Sterile Lab Environment
              </h2>
              <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.8', marginBottom: '30px' }}>
                Our polyclinic features dedicated suites for 3D Ultrasound, Color Doppler, 2D Echocardiography, 12-lead ECG, digital X-Ray, air-conditioned daycare recovery beds, and automated blood analyzer workstations.
              </p>
              <button onClick={() => onOpenAppointment()} className="btn btn-white">
                Book Diagnostic Test / Consultation
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
