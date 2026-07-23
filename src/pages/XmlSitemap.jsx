import React from 'react';
import SEO from '../components/SEO';
import { doctorsData, servicesData, specialitiesData, blogPostsData } from '../data/clinicData';

export default function XmlSitemap() {
  const baseUrl = "https://newlifediagnostic.in";
  
  const urls = [
    "",
    "/about",
    "/why-choose-us",
    "/workflow",
    "/testimonials",
    "/infrastructure",
    "/emergency",
    "/doctors",
    "/services",
    "/specialities",
    "/gallery",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    ...doctorsData.map(d => `/doctors/${d.id}`),
    ...servicesData.map(s => `/services/${s.id}`),
    ...specialitiesData.map(s => `/specialities/${s.id}`),
    ...blogPostsData.map(b => `/blog/${b.slug}`)
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return (
    <div>
      <SEO 
        title="XML Sitemap | New Life Diagnostic Centre"
        description="XML Sitemap for search engine indexation."
      />

      <section className="section">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left' }}>XML Sitemap (sitemap.xml)</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
            Copy or inspect the generated XML sitemap payload for Google Search Console and Bing Webmaster Tools.
          </p>

          <pre style={{
            background: '#0F172A',
            color: '#38BDF8',
            padding: '24px',
            borderRadius: '16px',
            overflowX: 'auto',
            fontSize: '13px',
            fontFamily: 'monospace',
            lineHeight: '1.6'
          }}>
            {xmlContent}
          </pre>
        </div>
      </section>
    </div>
  );
}
