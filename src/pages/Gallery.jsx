import React, { useState } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { galleryData, generateClinicSchema } from '../data/clinicData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Clinic', 'Reception', 'Laboratory', 'Equipment', 'Doctors', 'Patient Care'];

  const filteredGallery = galleryData.filter(item => activeCategory === 'All' || item.category === activeCategory);

  return (
    <div>
      <SEO 
        title="Photo Gallery | New Life Diagnostic Centre & Polyclinic Chaibasa"
        description="Take a visual tour of New Life Diagnostic Centre Chaibasa: high-tech laboratory, reception lounge, ultrasound room, doctor consultation suites, and equipment."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Gallery', path: '/gallery' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Clinic Visual Tour</span>
            <h1 className="section-title">New Life Polyclinic &amp; Lab Gallery</h1>
            <p className="section-subtitle">
              Explore our state-of-the-art diagnostic facilities, sterile laboratory infrastructure, and comfortable patient lounge in Chaibasa.
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: '50px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Masonry Grid */}
          <div className="grid-3">
            {filteredGallery.map(item => (
              <div key={item.id} className="glass-card" style={{ overflow: 'hidden', borderRadius: '20px' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block', transition: 'var(--transition-normal)' }}
                  className="gallery-img-hover"
                />
                <div style={{ padding: '20px' }}>
                  <span className="badge badge-teal" style={{ fontSize: '11px', marginBottom: '6px' }}>{item.category}</span>
                  <h3 style={{ fontSize: '16px', color: 'var(--primary)' }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
