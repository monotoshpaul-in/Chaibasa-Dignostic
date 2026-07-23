import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { clinicInfo, doctorsData, servicesData } from '../data/clinicData';

export default function AppointmentModal({ isOpen, onClose, initialDoctor = '', initialService = '' }) {
  const [formData, setFormData] = useState({
    bookingType: initialDoctor ? 'Doctor Consultation' : initialService ? 'Diagnostic Service' : 'Doctor Consultation',
    selectedTarget: initialDoctor || initialService || doctorsData[0].name,
    patientName: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (8:00 AM - 11:00 AM)',
    isHomeCollection: false,
    address: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000,
      backgroundColor: 'rgba(11, 74, 139, 0.6)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        maxWidth: '540px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        padding: '24px 20px'
      }} className="animate-fade-in">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'var(--secondary-light)',
              color: 'var(--secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle2 size={42} />
            </div>
            <h3 style={{ fontSize: '22px', marginBottom: '10px', color: 'var(--primary)' }}>
              Appointment Requested!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
              Thank you, <strong>{formData.patientName}</strong>. Our front desk team at New Life Diagnostic Centre will call you at <strong>{formData.phone}</strong> to confirm your slot.
            </p>
            <div style={{ marginTop: '20px', padding: '14px', background: 'var(--primary-light)', borderRadius: '12px', fontSize: '12px', color: 'var(--primary)' }}>
              <ShieldCheck size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Confirmation sent to WhatsApp &amp; SMS. Direct helpline: {clinicInfo.phonePrimary}
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px', paddingRight: '36px' }}>
              <span className="badge badge-teal" style={{ marginBottom: '6px' }}>Fast &amp; Easy Booking</span>
              <h2 style={{ fontSize: '22px', color: 'var(--primary)' }}>Book an Appointment</h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                New Life Diagnostic Centre &amp; Polyclinic • Chaibasa
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Booking Category */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
                  Booking Type
                </label>
                <select 
                  value={formData.bookingType} 
                  onChange={(e) => setFormData({...formData, bookingType: e.target.value, selectedTarget: ''})}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)', outline: 'none' }}
                >
                  <option value="Doctor Consultation">Doctor Consultation</option>
                  <option value="Diagnostic Service">Diagnostic Service / Scan</option>
                  <option value="Home Sample Collection">Home Blood Sample Collection</option>
                </select>
              </div>

              {/* Dynamic Target Picker */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
                  Select Doctor / Service
                </label>
                <select 
                  value={formData.selectedTarget} 
                  onChange={(e) => setFormData({...formData, selectedTarget: e.target.value})}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)', outline: 'none' }}
                  required
                >
                  {formData.bookingType === 'Doctor Consultation' && doctorsData.map(doc => (
                    <option key={doc.id} value={doc.name}>{doc.name} ({doc.speciality})</option>
                  ))}
                  {formData.bookingType === 'Diagnostic Service' && servicesData.map(srv => (
                    <option key={srv.id} value={srv.title}>{srv.title}</option>
                  ))}
                  {formData.bookingType === 'Home Sample Collection' && (
                    <option value="Full Body Home Blood Collection">Doorstep Blood Sample Collection</option>
                  )}
                </select>
              </div>

              {/* Patient Name & Mobile */}
              <div className="grid-2" style={{ gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Patient Name *</label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Mobile Number *</label>
                  <input 
                    type="tel" 
                    placeholder="10-digit number" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>
              </div>

              {/* Age, Gender & Date */}
              <div className="grid-3" style={{ gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Age</label>
                  <input 
                    type="number" 
                    placeholder="Years" 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Gender</label>
                  <select 
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Preferred Date *</label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Preferred Time Slot</label>
                <select 
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                >
                  <option>Morning (8:00 AM - 11:00 AM)</option>
                  <option>Mid-Day (11:00 AM - 2:00 PM)</option>
                  <option>Afternoon (2:00 PM - 5:00 PM)</option>
                  <option>Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>

              {/* Checkbox for Home Collection */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
                <input 
                  type="checkbox" 
                  id="homeColl"
                  checked={formData.isHomeCollection}
                  onChange={(e) => setFormData({...formData, isHomeCollection: e.target.checked})}
                />
                <label htmlFor="homeColl" style={{ fontSize: '12px', cursor: 'pointer' }}>
                  Require Doorstep Home Sample Collection in Chaibasa
                </label>
              </div>

              {formData.isHomeCollection && (
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Full Home Address in Chaibasa *</label>
                  <textarea 
                    rows="2" 
                    placeholder="House No, Landmark, Street name..." 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '6px', padding: '12px' }}>
                Confirm Appointment Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
