import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Clock, HeartPulse, UserCheck, 
  FlaskConical, Scan, Activity, ArrowRight, Star, ChevronDown, 
  Phone, Calendar, CheckCircle2, MapPin, Truck, Sparkles, AlertCircle, User
} from 'lucide-react';
import SEO from '../components/SEO';
import { 
  clinicInfo, doctorsData, servicesData, 
  workflowSteps, testimonialsData, galleryData, faqsData, generateClinicSchema 
} from '../data/clinicData';

export default function Home({ onOpenAppointment }) {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  return (
    <div className="bg-animated-wrapper">
      <SEO 
        title="New Life Diagnostic Centre & Polyclinic | Best Healthcare & Lab in Chaibasa"
        description="Chaibasa's leading diagnostic centre & polyclinic offering blood tests, 3D ultrasound, 2D echo, ECG, physiotherapy, and senior specialist doctor consultations."
        schema={generateClinicSchema()}
      />

      {/* HERO SECTION WITH CUSTOM NAMED CLINIC INTERIOR BACKGROUND */}
      <section style={{ 
        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(240,246,252,0.65) 50%, rgba(232,248,246,0.72) 100%), url('/assets/hospital_hero_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '50px 0 70px 0', 
        position: 'relative', 
        overflow: 'hidden',
        width: '100%'
      }}>

        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            {/* Left Hero Content */}
            <div className="animate-fade-in">
              <span className="badge badge-teal" style={{ marginBottom: '14px' }}>
                <Sparkles size={14} /> #1 Trusted Polyclinic &amp; Lab in Chaibasa
              </span>
              
              <h1 className="hero-title">
                Trusted Diagnostic Centre &amp; Multispeciality Polyclinic in Chaibasa
              </h1>
              
              <p className="hero-subtitle">
                Advanced diagnostic services, experienced specialist doctors, accurate reports, and compassionate patient care under one roof.
              </p>

              <div className="hero-cta-group">
                <button onClick={() => onOpenAppointment()} className="btn btn-primary">
                  <Calendar size={18} /> Book Appointment
                </button>

                <a href={`tel:${clinicInfo.phonePrimary}`} className="btn btn-outline">
                  <Phone size={18} /> Call: {clinicInfo.phonePrimary}
                </a>
              </div>

              {/* Floating Metric Badges with Smooth Micro-Animation */}
              <div className="hero-metrics-grid">
                <div className="glass-card floating-badge-card" style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '8px', borderRadius: '10px', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', color: 'var(--text-main)' }}>Same Day Reports</h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Quick digital delivery</p>
                  </div>
                </div>

                <div className="glass-card floating-badge-card-alt" style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: 'var(--secondary-light)', color: 'var(--secondary-dark)', padding: '8px', borderRadius: '10px', flexShrink: 0 }}>
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', color: 'var(--text-main)' }}>Expert Doctors</h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>15+ Yrs Senior Specialists</p>
                  </div>
                </div>

                <div className="glass-card floating-badge-card" style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '8px', borderRadius: '10px', flexShrink: 0 }}>
                    <FlaskConical size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', color: 'var(--text-main)' }}>Advanced Lab</h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Automated testing</p>
                  </div>
                </div>

                <div className="glass-card floating-badge-card-alt" style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: 'var(--secondary-light)', color: 'var(--secondary-dark)', padding: '8px', borderRadius: '10px', flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', color: 'var(--text-main)' }}>Affordable Care</h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Transparent pricing</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Single High-Res Compassionate Patient Care Banner Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '3px solid #FFFFFF',
                position: 'relative'
              }}>
                <img 
                  src="/assets/nurse_patient_care.jpg" 
                  alt="Compassionate Patient Care & Nursing at New Life Polyclinic Chaibasa" 
                  style={{ width: '100%', height: 'auto', maxHeight: '440px', objectFit: 'cover', display: 'block' }}
                />
                
                {/* Floating Glass Overlay Card */}
                <div className="glass-panel" style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  padding: '16px',
                  borderRadius: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B', marginBottom: '2px' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
                        <span style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '13px', marginLeft: '4px' }}>4.9 / 5.0</span>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>24/7 Compassionate Nursing &amp; Patient Care</p>
                    </div>
                    <button onClick={() => onOpenAppointment()} className="btn btn-secondary btn-sm">
                      Book Care Slot
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (TRUST SECTION) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Why Choose Us</span>
            <h2 className="section-title">Healthcare Designed Around Trust &amp; Precision</h2>
            <p className="section-subtitle">
              Combining world-class diagnostic equipment with compassionate clinical care to provide Chaibasa residents with reliable medical results.
            </p>
          </div>

          <div className="grid-4">
            {[
              { title: "Advanced Technology", desc: "Automated analyzers & 3D/4D ultrasound for error-free diagnosis.", icon: Scan },
              { title: "Expert Doctors", desc: "Consult senior cardiologists, physicians, gynecologists & surgeons.", icon: UserCheck },
              { title: "Accurate Diagnosis", desc: "Double-checked lab reports verified by senior MD pathologists.", icon: ShieldCheck },
              { title: "Affordable Healthcare", desc: "Transparent & ethical pricing for all diagnostic services.", icon: Award },
              { title: "Digital Reports", desc: "Instant report delivery via WhatsApp & Email directly to your phone.", icon: Clock },
              { title: "Patient-First Approach", desc: "Kind, courteous staff and minimal wait times in comfortable lounge.", icon: HeartPulse },
              { title: "Experienced Laboratory", desc: "NABL standard quality controls & daily calibration protocols.", icon: FlaskConical },
              { title: "Safe & Sterile Environment", desc: "Aseptic sample collection and sanitized consultation rooms.", icon: CheckCircle2 }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '20px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px'
                  }}>
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: '16px', marginBottom: '6px', color: 'var(--text-main)' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER SECTION */}
      <section className="section bg-gradient-soft">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <img 
                src="/assets/reception.jpg" 
                alt="New Life Diagnostic Centre Lounge Chaibasa" 
                style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', border: '3px solid #FFFFFF' }}
              />
            </div>

            <div>
              <span className="badge badge-teal" style={{ marginBottom: '10px' }}>About New Life Polyclinic</span>
              <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: 'var(--primary)', marginBottom: '14px' }}>
                Chaibasa’s Premier Healthcare &amp; Diagnostic Facility
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '14px' }}>
                Established with a mission to bring high-end diagnostic accuracy and specialist medical consultations to West Singhbhum, <strong>New Life Diagnostic Centre &amp; Polyclinic</strong> bridges the gap between patient care and modern medical technology.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                From routine pathology blood tests to complex echocardiography and joint replacement consultations, our dedicated team ensures every patient receives respectful care.
              </p>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ fontSize: '24px', color: 'var(--secondary)' }}>15+</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Years Experience</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', color: 'var(--primary)' }}>50,000+</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Patients Served</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', color: 'var(--secondary)' }}>100%</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Quality Standard</p>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Comprehensive Care</span>
            <h2 className="section-title">Our Diagnostic &amp; Clinical Services</h2>
            <p className="section-subtitle">
              Explore our wide array of laboratory tests, diagnostic scans, and clinical services performed by trained technicians.
            </p>
          </div>

          <div className="grid-3">
            {servicesData.map((srv) => (
              <div key={srv.id} className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--secondary-light)',
                    color: 'var(--secondary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px'
                  }}>
                    <FlaskConical size={22} />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--primary)' }}>{srv.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                    {srv.shortDesc}
                  </p>
                  
                  <div style={{ fontSize: '12px', color: 'var(--secondary-dark)', fontWeight: 600, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} /> Turnaround: {srv.turnaround}
                  </div>
                </div>

                <Link 
                  to={`/services/${srv.id}`} 
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View Details &amp; Book <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="section bg-gradient-soft">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Our Specialist Team</span>
            <h2 className="section-title">Consult Senior Doctors in Chaibasa</h2>
            <p className="section-subtitle">
              Experienced consultant physicians, cardiologists, surgeons, and gynecologists available for polyclinic OPD consultations.
            </p>
          </div>

          <div className="grid-3">
            {doctorsData.map((doc) => (
              <div key={doc.id} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 14px auto', border: '3px solid var(--secondary)' }}
                />
                <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '4px' }}>{doc.name}</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--secondary-dark)', marginBottom: '4px' }}>{doc.title}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>{doc.degree} • {doc.experience}</p>

                <div style={{ background: 'var(--primary-light)', padding: '8px', borderRadius: '8px', fontSize: '11px', color: 'var(--primary)', marginBottom: '14px' }}>
                  🗓️ {doc.visitingDays}
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to={`/doctors/${doc.id}`} className="btn btn-outline btn-sm" style={{ flex: 1, minWidth: '100px' }}>
                    Profile
                  </Link>
                  <button onClick={() => onOpenAppointment()} className="btn btn-primary btn-sm" style={{ flex: 1, minWidth: '100px' }}>
                    Book OPD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-STEP PATIENT WORKFLOW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Seamless Process</span>
            <h2 className="section-title">How Your Visit Works</h2>
            <p className="section-subtitle">
              From online booking to verified digital report delivery, our streamlined workflow ensures total convenience.
            </p>
          </div>

          <div className="grid-3">
            {workflowSteps.map((wf) => (
              <div key={wf.step} className="glass-card" style={{ padding: '20px', position: 'relative' }}>
                <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-light)', position: 'absolute', top: '14px', right: '16px' }}>
                  {wf.step}
                </span>
                <h3 style={{ fontSize: '17px', color: 'var(--primary)', marginBottom: '8px', position: 'relative' }}>
                  {wf.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="section bg-gradient-soft">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Patient Feedback</span>
            <h2 className="section-title">What Patients Say About Us</h2>
            <p className="section-subtitle">
              Read real experiences from families across Chaibasa and West Singhbhum.
            </p>
          </div>

          <div className="grid-2">
            {testimonialsData.map((t) => (
              <div key={t.id} className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', color: 'var(--primary)' }}>{t.name}</h3>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>📍 {t.location} • {t.date}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  "{t.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Clear Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find fast answers to common questions about diagnostic tests, appointments, and report timings.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqsData[0].questions.map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className="glass-card"
                style={{ marginBottom: '12px', padding: '16px', cursor: 'pointer' }}
                onClick={() => setActiveFaqIndex(activeFaqIndex === fIdx ? -1 : fIdx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <h3 style={{ fontSize: '15px', color: 'var(--primary)', margin: 0 }}>{faq.q}</h3>
                  <ChevronDown size={18} style={{ transform: activeFaqIndex === fIdx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'var(--transition-fast)', flexShrink: 0 }} />
                </div>
                {activeFaqIndex === fIdx && (
                  <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link to="/faq" className="btn btn-outline">View All 20+ FAQs</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
