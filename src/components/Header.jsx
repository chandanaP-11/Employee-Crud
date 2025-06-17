import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Users, Plus } from 'lucide-react'; // Lucide icons

function Header() {
  return (
    <Navbar expand="lg" className="py-3" style={{
      background: 'linear-gradient(135deg, #00C9A7 0%, #017374 100%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold d-flex align-items-center gap-2 fs-4">
          <Users size={32} className="text-white" />
          STAFF SYNC
        </Navbar.Brand>

        <div className="text-end mb-3">
          <Link to="/add" className="text-decoration-none">
            <button
              className="d-flex align-items-center gap-2 px-4 py-2"
              style={{
                background: 'linear-gradient(135deg, #00c6a7, #1e90ff)',
                color: '#fff',
                fontWeight: '600',
                borderRadius: '30px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                border: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Plus size={20} />
              Add Employee
            </button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
