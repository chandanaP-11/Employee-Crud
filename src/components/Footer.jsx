import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg,rgb(42, 88, 80) 0%, #017374 100%)',
        color: 'white',
        padding: '2rem 0',
        marginTop: '4rem',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="container text-center">
        <h5 className="fw-bold mb-2">Employee Portal</h5>
        <p className="mb-2" style={{ fontSize: '0.95rem' }}>
          Seamless employee registration and management.
        </p>

        <hr className="border-light mx-auto" style={{ width: '50%' }} />

        <p className="mb-0" style={{ fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} <strong>StaffSync</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
