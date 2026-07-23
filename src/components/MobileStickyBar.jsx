import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function MobileStickyBar({ onOpenAppointment }) {
  return (
    <div className="mobile-sticky-bar">
      <div className="mobile-sticky-inner">
        <a 
          href={`tel:${clinicInfo.phonePrimary}`} 
          className="btn btn-outline" 
          style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
        >
          <Phone size={14} /> Call
        </a>
        
        <a 
          href={`https://wa.me/${clinicInfo.whatsapp}`} 
          target="_blank" 
          rel="noreferrer" 
          className="btn btn-secondary"
        >
          <MessageSquare size={14} /> WhatsApp
        </a>

        <button 
          onClick={() => onOpenAppointment()} 
          className="btn btn-primary"
        >
          <Calendar size={14} /> Book Slot
        </button>
      </div>
    </div>
  );
}
