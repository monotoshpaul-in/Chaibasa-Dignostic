import React, { useState } from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { faqsData, generateClinicSchema } from '../data/clinicData';

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState('0-0');
  const [faqSearch, setFaqSearch] = useState('');

  // Extract all questions for schema
  const allFaqs = faqsData.flatMap(cat => cat.questions);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div>
      <SEO 
        title="Frequently Asked Questions (FAQ) | New Life Diagnostic Chaibasa"
        description="Get answers to 20+ questions regarding blood test timings, ultrasound scans, doctor consultation fees, home sample collection, and digital report delivery."
        schema={faqSchema}
      />

      <Breadcrumbs items={[{ label: 'FAQ', path: '/faq' }]} />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div className="section-header">
            <span className="badge badge-primary">Patient Information</span>
            <h1 className="section-title">Frequently Asked Questions (FAQ)</h1>
            <p className="section-subtitle">
              Have questions about your diagnostic tests, preparation rules, or doctor appointments? Find instant answers below.
            </p>
          </div>

          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '50px' }}>
            <input 
              type="text" 
              placeholder="Search your question (e.g. Fasting, Reports, Home Collection)..." 
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 48px',
                borderRadius: '50px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                outline: 'none',
                fontSize: '15px'
              }}
            />
            <Search size={20} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>

          {/* Categories */}
          {faqsData.map((cat, cIdx) => {
            const filteredQuestions = cat.questions.filter(q => 
              q.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
              q.a.toLowerCase().includes(faqSearch.toLowerCase())
            );

            if (filteredQuestions.length === 0) return null;

            return (
              <div key={cIdx} style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={22} color="var(--secondary)" /> {cat.category}
                </h2>

                <div>
                  {filteredQuestions.map((faq, qIdx) => {
                    const faqId = `${cIdx}-${qIdx}`;
                    const isOpen = activeFaq === faqId;

                    return (
                      <div 
                        key={qIdx}
                        className="glass-card"
                        style={{ marginBottom: '14px', padding: '20px', cursor: 'pointer' }}
                        onClick={() => setActiveFaq(isOpen ? '' : faqId)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h3 style={{ fontSize: '17px', color: 'var(--primary)', margin: 0, fontWeight: 600 }}>
                            {faq.q}
                          </h3>
                          <ChevronDown 
                            size={20} 
                            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'var(--transition-fast)', flexShrink: 0 }} 
                          />
                        </div>

                        {isOpen && (
                          <p style={{ marginTop: '14px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', borderTop: '1px solid var(--border-light)', paddingTop: '12px' }}>
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
}
