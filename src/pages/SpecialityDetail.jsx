import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Calendar, UserCheck, CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { specialitiesData, doctorsData, clinicInfo } from '../data/clinicData';

export default function SpecialityDetail({ onOpenAppointment }) {
  const { id } = useParams();
  const speciality = specialitiesData.find(s => s.id === id) || specialitiesData[0];

  // Find matching doctors
  const matchingDoctors = doctorsData.filter(d => d.speciality.toLowerCase().includes(speciality.name.toLowerCase()) || speciality.name.toLowerCase().includes(d.speciality.toLowerCase()));

  return (
    <div>
      <SEO 
        title={`${speciality.name} Department in Chaibasa | New Life Polyclinic`}
        description={`Department of ${speciality.name} at New Life Polyclinic Chaibasa. Experienced specialist doctors, modern diagnostics, and patient care.`}
      />

      <Breadcrumbs items={[
        { label: 'Specialities', path: '/specialities' },
        { label: speciality.name, path: `/specialities/${speciality.id}` }
      ]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 40px 0', maxWidth: '100%' }}>
            <span className="badge badge-teal">Medical Department</span>
            <h1 className="section-title">Department of {speciality.name}</h1>
            <p className="section-subtitle">{speciality.desc}</p>
          </div>

          <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: '60px' }}>
            <div>
              <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '16px' }}>Clinical Services &amp; Conditions Treated</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '15px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} color="var(--secondary)" /> OPD consultations with senior consultant specialists
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '15px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} color="var(--secondary)" /> Integrated diagnostic blood testing &amp; scan evaluations
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '15px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} color="var(--secondary)" /> Evidence-based preventive health &amp; long-term disease management
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '15px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={18} color="var(--secondary)" /> Day care procedure assistance &amp; prescription follow-ups
                </li>
              </ul>
            </div>

            <div>
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '12px' }}>Book Department OPD</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Consult our senior doctors in Chaibasa. Prior booking recommended.
                </p>
                <button onClick={() => onOpenAppointment()} className="btn btn-primary" style={{ width: '100%' }}>
                  <Calendar size={16} /> Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Department Doctors */}
          {matchingDoctors.length > 0 && (
            <div>
              <h2 style={{ fontSize: '26px', color: 'var(--primary)', marginBottom: '24px' }}>Specialist Doctors in {speciality.name}</h2>
              <div className="grid-3">
                {matchingDoctors.map(doc => (
                  <div key={doc.id} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                    <img src={doc.image} alt={doc.name} style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 14px auto', border: '3px solid var(--secondary)' }} />
                    <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '4px' }}>{doc.name}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--secondary-dark)', fontWeight: 600, marginBottom: '12px' }}>{doc.title}</p>
                    <Link to={`/doctors/${doc.id}`} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                      View Doctor Profile
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '40px' }}>
            <Link to="/specialities" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600 }}>
              <ArrowLeft size={16} /> Back to All Specialities
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
