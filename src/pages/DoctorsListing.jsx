import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { UserCheck, Calendar, ArrowRight, Search, Stethoscope } from 'lucide-react';
import { doctorsData, clinicInfo, generateClinicSchema } from '../data/clinicData';

export default function DoctorsListing({ onOpenAppointment }) {
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const specialitiesList = ['All', 'Cardiology', 'General Medicine', 'Gynecology & Obstetrics', 'Orthopedics', 'Pathology', 'General Surgery'];

  const filteredDoctors = doctorsData.filter(doc => {
    const matchesSpec = selectedSpeciality === 'All' || doc.speciality === selectedSpeciality;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpec && matchesSearch;
  });

  return (
    <div>
      <SEO 
        title="Specialist Doctors in Chaibasa | New Life Polyclinic"
        description="Book consultations with senior consultant cardiologists, physicians, gynecologists, orthopedic surgeons & pathologists in Chaibasa."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Doctors', path: '/doctors' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Polyclinic Medical Staff</span>
            <h1 className="section-title">Our Senior Specialist Doctors in Chaibasa</h1>
            <p className="section-subtitle">
              Consult highly experienced, compassionate medical specialists dedicated to your health and well-being.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto', width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search doctor name or speciality..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 20px 12px 44px',
                  borderRadius: '50px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {specialitiesList.map(spec => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpeciality(spec)}
                  className={`btn btn-sm ${selectedSpeciality === spec ? 'btn-primary' : 'btn-outline'}`}
                  style={{ borderRadius: '50px', padding: '6px 14px', fontSize: '12px' }}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid-3">
            {filteredDoctors.map(doc => (
              <div key={doc.id} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 14px auto', border: '3px solid var(--secondary)' }}
                />
                <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '4px' }}>{doc.name}</h3>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--secondary-dark)', marginBottom: '4px' }}>{doc.title}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px' }}>{doc.degree} • {doc.experience} Exp</p>
                
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                  {doc.bio.substring(0, 110)}...
                </p>

                <div style={{ background: 'var(--primary-light)', padding: '10px', borderRadius: '10px', fontSize: '11px', color: 'var(--primary)', marginBottom: '16px', fontWeight: 600 }}>
                  🗓️ {doc.visitingDays}
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to={`/doctors/${doc.id}`} className="btn btn-outline btn-sm" style={{ flex: 1, minWidth: '100px', justifyContent: 'center' }}>
                    View Profile
                  </Link>
                  <button onClick={() => onOpenAppointment(doc.name)} className="btn btn-primary btn-sm" style={{ flex: 1, minWidth: '100px', justifyContent: 'center' }}>
                    Book Consult
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
