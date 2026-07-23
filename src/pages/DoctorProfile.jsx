import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Calendar, Clock, CheckCircle2, Award, BookOpen, HelpCircle, Phone } from 'lucide-react';
import { doctorsData, clinicInfo } from '../data/clinicData';

export default function DoctorProfile({ onOpenAppointment }) {
  const { doctorId } = useParams();
  const doctor = doctorsData.find(d => d.id === doctorId) || doctorsData[0];

  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "medicalSpecialty": doctor.speciality,
    "description": doctor.bio,
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": clinicInfo.name,
      "address": clinicInfo.address
    }
  };

  return (
    <div>
      <SEO 
        title={`${doctor.name} - ${doctor.title} in Chaibasa | New Life Polyclinic`}
        description={`Consult ${doctor.name} (${doctor.degree}), ${doctor.title} with ${doctor.experience} experience at New Life Polyclinic Chaibasa.`}
        schema={doctorSchema}
      />

      <Breadcrumbs items={[
        { label: 'Doctors', path: '/doctors' },
        { label: doctor.name, path: `/doctors/${doctor.id}` }
      ]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          
          {/* Header Doctor Banner Card */}
          <div className="glass-card" style={{ padding: '40px', marginBottom: '50px' }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '5px solid var(--secondary)' }}
                />
                <div>
                  <span className="badge badge-teal" style={{ marginBottom: '8px' }}>{doctor.speciality} Specialist</span>
                  <h1 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '6px' }}>{doctor.name}</h1>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--secondary-dark)', marginBottom: '8px' }}>{doctor.title}</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>{doctor.degree} • {doctor.experience} Experience</p>
                  
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '14px', color: 'var(--text-main)' }}>
                    <span>🗓️ <strong>Visiting:</strong> {doctor.visitingDays}</span>
                    <span>💳 <strong>Consultation Fee:</strong> {doctor.fee}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                <button onClick={() => onOpenAppointment(doctor.name)} className="btn btn-primary btn-lg">
                  <Calendar size={18} /> Book Appointment with {doctor.name}
                </button>
                <a href={`tel:${clinicInfo.phonePrimary}`} className="btn btn-outline" style={{ textAlign: 'center' }}>
                  <Phone size={18} /> Call Clinic Hotline
                </a>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid-2" style={{ marginBottom: '60px' }}>
            
            {/* Left Bio & Expertise */}
            <div>
              <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '16px' }}>Doctor Biography</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px' }}>
                {doctor.bio}
              </p>

              <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>Key Areas of Clinical Focus</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {doctor.expertise.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={18} color="var(--secondary)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '12px' }}>Qualifications &amp; Education</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', background: 'var(--primary-light)', padding: '16px', borderRadius: '12px' }}>
                <BookOpen size={16} style={{ display: 'inline', marginRight: '8px' }} />
                {doctor.education}
              </p>
            </div>

            {/* Right FAQs & Schedule Card */}
            <div>
              <div className="glass-card" style={{ padding: '32px', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>
                  Consultation Schedule &amp; Venue
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'var(--text-main)', marginBottom: '20px' }}>
                  <div>📍 <strong>Venue:</strong> New Life Polyclinic, Main Road, Opp. Sadar Hospital, Chaibasa</div>
                  <div>⏰ <strong>Timings:</strong> {doctor.visitingDays}</div>
                  <div>📞 <strong>Reception Phone:</strong> {clinicInfo.phonePrimary}</div>
                </div>
                <button onClick={() => onOpenAppointment(doctor.name)} className="btn btn-secondary" style={{ width: '100%' }}>
                  Reserve Slot Now
                </button>
              </div>

              {doctor.faqs && (
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>Doctor FAQs</h3>
                  {doctor.faqs.map((faq, fIdx) => (
                    <div key={fIdx} style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
                      <h4 style={{ fontSize: '15px', color: 'var(--primary)', marginBottom: '6px' }}>Q: {faq.q}</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
