import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Spinner } from 'react-bootstrap';


import axios from 'axios';

function EditEmpForm() {
  const { id } = useParams();
  const nav = useNavigate();

  const [emp, setEmp] = useState({
    name: '',
    photo: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    birthday: '',
    location: ''
  });

  const [loading, setLoading] = useState(true);

  // Fetch employee data on load
  const fetchEmp = async () => {
    try {
      const res = await axios.get(`https://employee-crud-server-svou.onrender.com/employees/${id}`);
      setEmp(res.data);
      setLoading(false);
    } catch (err) {
      alert('Failed to fetch employee data');
      nav('/');
    }
  };

  useEffect(() => {
    fetchEmp();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  // Submit updated data
  const handleUpdate = async () => {
    try {
      const res = await axios.put(`https://employee-crud-server-svou.onrender.com/employees/${id}`, emp);
      if (res.status === 200) {
        alert('Employee updated successfully!');
        nav('/');
      }
    } catch (err) {
      alert('Error updating employee');
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="container my-5 p-4 shadow-lg rounded-4 bg-light">
      <h3 className="text-center mb-4 fw-bold text-primary">Update Employee Info</h3>

      <Form>
        <FloatingLabel className="mb-3" label="Full Name">
          <Form.Control type="text" name="name" value={emp.name} onChange={handleChange} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Photo URL">
          <Form.Control type="text" name="photo" value={emp.photo} onChange={handleChange} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Position">
          <Form.Control type="text" name="position" value={emp.position} onChange={handleChange} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Department">
          <Form.Control type="text" name="department" value={emp.department} onChange={handleChange} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Email">
          <Form.Control type="email" name="email" value={emp.email} onChange={handleChange} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Phone">
          <Form.Control type="text" name="phone" value={emp.phone} onChange={handleChange} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Birthday">
          <Form.Control type="date" name="birthday" value={emp.birthday} onChange={handleChange} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Location">
          <Form.Control type="text" name="location" value={emp.location} onChange={handleChange} />
        </FloatingLabel>

        <div className="text-end">
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditEmpForm;
