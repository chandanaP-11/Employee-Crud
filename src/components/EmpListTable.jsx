import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../redux/employeeSlice';
import { Table, Badge, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  Mail, Calendar, Phone, Tag, User, Image as ImageIcon, MapPin, Edit, Trash2
} from 'lucide-react';

function EmpListModernTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { employees, loading, error } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployee(id));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">STAFF DETAILS</h2>

      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <p className="text-center text-danger">Error: {error}</p>
      )}

      {!loading && (
        <div className="table-responsive shadow-sm rounded-4">
          <Table className="align-middle table-hover text-center" bordered>
            <thead style={{ backgroundColor: '#f1f1f1' }}>
              <tr className="text-dark fw-semibold">
                <th><User size={16} className="me-1" />Name</th>
                <th><ImageIcon size={16} className="me-1" />Photo</th>
                <th><Tag size={16} className="me-1" />Position</th>
                <th><Tag size={16} className="me-1" />Department</th>
                <th><Mail size={16} className="me-1" />Email</th>
                <th><Phone size={16} className="me-1" />Phone</th>
                <th><Calendar size={16} className="me-1" />Birthday</th>
                <th><MapPin size={16} className="me-1" />Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>
                      <img
                        src={emp.photo}
                        alt={emp.name}
                        style={{
                          width: '45px',
                          height: '45px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                        }}
                      />
                    </td>
                    <td><Badge bg="success">{emp.position}</Badge></td>
                    <td><Badge bg="secondary">{emp.department}</Badge></td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.birthday}</td>
                    <td><Badge bg="info">{emp.location}</Badge></td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(emp.id)}
                      >
                        <Edit size={14} />
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(emp.id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4 text-muted">
                    No employee data found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default EmpListModernTable;
