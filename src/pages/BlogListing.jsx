import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Clock, ArrowRight, UserCheck } from 'lucide-react';
import { blogPostsData, generateClinicSchema } from '../data/clinicData';

export default function BlogListing() {
  return (
    <div>
      <SEO 
        title="Health & Diagnostic Blog | New Life Polyclinic Chaibasa"
        description="Read medical articles written by senior doctors and pathologists on blood test interpretation, heart care, diabetes control, and preventive diagnostics."
        schema={generateClinicSchema()}
      />

      <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Health Education &amp; Insights</span>
            <h1 className="section-title">Medical &amp; Diagnostic Knowledge Hub</h1>
            <p className="section-subtitle">
              EEAT compliant healthcare articles written by our chief pathologists and consultant physicians in Chaibasa.
            </p>
          </div>

          <div className="grid-2">
            {blogPostsData.map(post => (
              <div key={post.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      <span className="badge badge-teal">{post.category}</span>
                      <span><Clock size={12} style={{ display: 'inline', marginRight: '4px' }} /> {post.readTime}</span>
                      <span>• {post.date}</span>
                    </div>

                    <h2 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '12px', lineHeight: '1.4' }}>
                      {post.title}
                    </h2>

                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>

                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--secondary-dark)', marginBottom: '20px' }}>
                      ✍️ {post.author}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 28px 28px 28px' }}>
                  <Link to={`/blog/${post.slug}`} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                    Read Full Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
