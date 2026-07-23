import React, { useState } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { clinicInfo, doctorsData, servicesData, generateClinicSchema } from '../data/clinicData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Doctor Consultation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <SEO 
        title="Contact & Location | New Life Diagnostic Centre & Polyclinic Chaibasa"
        description="Contact New Life Diagnostic Centre Chaibasa. Location: Main Road, Opp. Sadar Hospital, Chaibasa. Call +91 94313 88900 for appointments & home collection."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Get In Touch</span>
            <h1 className="section-title">Contact &amp; Polyclinic Location</h1>
            <p className="section-subtitle">
              We are conveniently located on Main Road opposite Sadar Hospital in Chaibasa. Visit us or reach out via phone/WhatsApp.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: '60px' }}>
            
            {/* Left Info & Emergency Call */}
            <div>
              <div className="glass-card" style={{ padding: '32px', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '20px' }}>Contact Information</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', color: 'var(--text-main)' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <MapPin size={22} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <div>
                      <strong>Address:</strong>
                      <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>{clinicInfo.address}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Phone size={22} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <div>
                      <strong>Phone Hotlines:</strong>
                      <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
                        <a href={`tel:${clinicInfo.phonePrimary}`} style={{ color: 'var(--primary)', fontWeight: 600 }}>{clinicInfo.phonePrimary}</a> / {clinicInfo.phoneSecondary}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <MessageSquare size={22} style={{ color: '#25D366', flexShrink: 0 }} />
                    <div>
                      <strong>WhatsApp Desk:</strong>
                      <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
                        <a href={`https://wa.me/${clinicInfo.whatsapp}`} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>
                          Chat on WhatsApp ({clinicInfo.phonePrimary})
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Mail size={22} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <div>
                      <strong>Email Enquiries:</strong>
                      <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>{clinicInfo.email}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Clock size={22} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <div>
                      <strong>Operational Hours:</strong>
                      <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>{clinicInfo.workingHours.weekdays}</p>
                      <p style={{ color: 'var(--text-muted)' }}>{clinicInfo.workingHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Box */}
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', padding: '24px', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '18px', color: '#991B1B', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertTriangle size={20} color="#DC2626" /> Emergency Helpline
                </h3>
                <p style={{ fontSize: '14px', color: '#7F1D1D', marginBottom: '14px' }}>
                  For urgent diagnostic blood test requirements or acute non-critical physician consultations:
                </p>
                <a href={`tel:${clinicInfo.phonePrimary}`} className="btn" style={{ background: '#DC2626', color: '#FFFFFF', width: '100%', justifyContent: 'center' }}>
                  <Phone size={16} /> Call Emergency Helpline Now
                </a>
              </div>
            </div>

            {/* Right Contact Form */}
            <div>
              <div className="glass-card" style={{ padding: '36px' }}>
                <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '8px' }}>Send Us a Message</h2>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Fill in your details below and our patient care team will get back to you within 30 minutes.
                </p>

                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                    <CheckCircle2 size={48} color="var(--secondary)" style={{ margin: '0 auto 16px auto' }} />
                    <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '8px' }}>Message Received!</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                      Thank you, {formData.name}. We will contact you shortly on {formData.phone}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Mobile Number *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="10-digit mobile"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Enquiry Type</label>
                        <select 
                          value={formData.type}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                          style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                        >
                          <option>Doctor Consultation</option>
                          <option>Pathology / Blood Test</option>
                          <option>Ultrasound / 2D Echo</option>
                          <option>Home Sample Collection</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Message / Requirements</label>
                      <textarea 
                        rows="4"
                        placeholder="Describe your requirement or preferred date..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      <Send size={16} /> Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Interactive Google Map Section */}
          <div>
            <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '16px', textAlign: 'center' }}>
              Locate Us on Google Maps
            </h2>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)', height: '400px' }}>
              <iframe 
                title="New Life Diagnostic Centre Chaibasa Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.855913988167!2d85.80870000000001!3d22.553200000000002!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5de60a0000001%3A0x1000000000000000!2sChaibasa%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
