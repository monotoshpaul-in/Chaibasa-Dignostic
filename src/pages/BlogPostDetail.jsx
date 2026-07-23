import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Clock, UserCheck, Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { blogPostsData, clinicInfo } from '../data/clinicData';

export default function BlogPostDetail({ onOpenAppointment }) {
  const { slug } = useParams();
  const post = blogPostsData.find(p => p.slug === slug) || blogPostsData[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": clinicInfo.name,
      "logo": "https://newlifediagnostic.in/logo.svg"
    },
    "datePublished": "2026-07-10"
  };

  return (
    <div>
      <SEO 
        title={`${post.title} | New Life Health Blog`}
        description={post.excerpt}
        schema={articleSchema}
      />

      <Breadcrumbs items={[
        { label: 'Blog', path: '/blog' },
        { label: post.title.substring(0, 30) + '...', path: `/blog/${post.slug}` }
      ]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <span className="badge badge-teal" style={{ marginBottom: '12px' }}>{post.category}</span>
          <h1 style={{ fontSize: '36px', color: 'var(--primary)', lineHeight: '1.3', marginBottom: '16px' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '30px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
            <span><strong>By:</strong> {post.author}</span>
            <span>📅 {post.date}</span>
            <span>⏱️ {post.readTime}</span>
          </div>

          <img 
            src={post.image} 
            alt={post.title} 
            style={{ width: '100%', borderRadius: '24px', height: '400px', objectFit: 'cover', marginBottom: '40px', boxShadow: 'var(--shadow-md)' }}
          />

          <div 
            style={{ fontSize: '16px', color: 'var(--text-main)', lineHeight: '1.8', whiteSpace: 'pre-line' }}
          >
            {post.content}
          </div>

          {/* CTA Box */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px', marginTop: '50px', background: 'var(--primary-light)' }}>
            <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '8px' }}>
              Take Proactive Charge of Your Health
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Schedule your full body health checkup or consult our specialist doctors at New Life Diagnostic Centre in Chaibasa.
            </p>
            <button onClick={() => onOpenAppointment()} className="btn btn-primary">
              <Calendar size={16} /> Book Health Checkup Package
            </button>
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600 }}>
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
