import React from 'react';
import './empty.css';

function Empty({ children, classname = '' }) {
  return <div className={`empty ` + classname}>{children}</div>;
}

export default Empty;
