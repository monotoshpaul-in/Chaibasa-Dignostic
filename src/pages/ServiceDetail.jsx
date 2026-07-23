import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Calendar, Clock, ShieldCheck, CheckCircle2, AlertCircle, Phone, ArrowLeft } from 'lucide-react';
import { servicesData, clinicInfo } from '../data/clinicData';

export default function ServiceDetail({ onOpenAppointment }) {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDesc,
    "provider": {
      "@type": "MedicalClinic",
      "name": clinicInfo.name,
      "address": clinicInfo.address
    }
  };

  return (
    <div>
      <SEO 
        title={`${service.title} in Chaibasa | New Life Diagnostic Centre`}
        description={`${service.title} at New Life Diagnostic Centre Chaibasa. ${service.shortDesc} Same day digital reports.`}
        schema={serviceSchema}
      />

      <Breadcrumbs items={[
        { label: 'Services', path: '/services' },
        { label: service.title, path: `/services/${service.id}` }
      ]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">

          {/* Visual Header Banner */}
          <div style={{ position: 'relative', height: '300px', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px', boxShadow: 'var(--shadow-md)' }}>
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,74,139,0.85) 0%, rgba(11,74,139,0.3) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', color: '#FFFFFF' }}>
              <span className="badge badge-teal" style={{ marginBottom: '8px' }}>NABL Standard Service</span>
              <h1 style={{ fontSize: '36px', color: '#FFFFFF' }}>{service.title}</h1>
            </div>
          </div>
          
          <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: '60px' }}>
            
            {/* Left Content */}
            <div>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px' }}>
                {service.fullDesc}
              </p>

              <div style={{ background: 'var(--primary-light)', padding: '20px', borderRadius: '16px', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>Turnaround &amp; Report Delivery</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-main)' }}>
                  ⏱️ <strong>Report Time:</strong> {service.turnaround}
                </p>
                {service.homeSample && (
                  <p style={{ fontSize: '13px', color: 'var(--secondary-dark)', fontWeight: 600, marginTop: '4px' }}>
                    🏠 Doorstep Home Sample Collection available in Chaibasa
                  </p>
                )}
              </div>

              {/* Tests Included */}
              <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '16px' }}>What is Included / Evaluated</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '40px' }}>
                {service.testsIncluded.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-main)', background: '#FFFFFF', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                    <CheckCircle2 size={16} color="var(--secondary)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Prep Instruction */}
              <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '20px', borderRadius: '16px', marginBottom: '30px' }}>
                <h4 style={{ fontSize: '16px', color: '#92400E', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={18} /> Patient Preparation Guidelines
                </h4>
                <p style={{ fontSize: '14px', color: '#78350F', lineHeight: '1.6' }}>
                  {service.prepInstruction}
                </p>
              </div>

            </div>

            {/* Right Booking Card */}
            <div>
              <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid var(--secondary)' }}>
                <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '12px' }}>
                  Book {service.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Reserve your test slot or request doorstep blood sample collection in Chaibasa.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <button onClick={() => onOpenAppointment('', service.title)} className="btn btn-primary btn-lg">
                    <Calendar size={18} /> Schedule Appointment Now
                  </button>

                  <a href={`https://wa.me/${clinicInfo.whatsapp}?text=Hello%20New%20Life%2C%20I%20want%20to%20book%20${encodeURIComponent(service.title)}`} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ textAlign: 'center' }}>
                    Book via WhatsApp
                  </a>

                  <a href={`tel:${clinicInfo.phonePrimary}`} className="btn btn-outline" style={{ textAlign: 'center' }}>
                    <Phone size={16} /> Call Helpline: {clinicInfo.phonePrimary}
                  </a>
                </div>

                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                  🔒 100% Confidential • Digital PDF Report Delivery • Verified by MD Pathologist
                </div>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600 }}>
              <ArrowLeft size={16} /> Back to All Services
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
