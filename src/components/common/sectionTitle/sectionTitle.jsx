import React from 'react';
import './sectionTitle.css';

function SectionTitle({ children, className }) {
  return (
    <div className={`section-title__wrapper ${className}`}>
      <h2 className="cestion-title">{children}</h2>
    </div>
  );
}

export default SectionTitle;
