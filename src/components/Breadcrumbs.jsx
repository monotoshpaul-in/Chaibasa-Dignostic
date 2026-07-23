import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Home size={14} /> Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <li className="breadcrumb-separator">
                  <ChevronRight size={14} />
                </li>
                <li className="breadcrumb-item">
                  {isLast ? (
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{item.label}</span>
                  ) : (
                    <Link to={item.path}>{item.label}</Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
