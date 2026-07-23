import React, { useEffect } from 'react';

export default function SEO({ 
  title = "New Life Diagnostic Centre & Polyclinic | Chaibasa", 
  description = "Top diagnostic centre and multispeciality polyclinic in Chaibasa offering pathology blood tests, 3D ultrasound, 2D echo, ECG, physiotherapy, and specialist doctor consultations.",
  keywords = "Diagnostic Centre in Chaibasa, Pathology Lab in Chaibasa, ECG Centre in Chaibasa, Ultrasound Centre in Chaibasa, Best Diagnostic Centre in Chaibasa, Physiotherapy in Chaibasa, Cardiologist in Chaibasa, General Physician in Chaibasa",
  canonical = "https://newlifediagnostic.in",
  schema = null 
}) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update Meta Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.name = "keywords";
      document.head.appendChild(metaKw);
    }
    metaKw.content = keywords;

    // Inject JSON-LD Schema
    const scriptId = "json-ld-schema";
    let existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, keywords, canonical, schema]);

  return null;
}
