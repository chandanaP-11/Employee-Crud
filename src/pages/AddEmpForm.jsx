import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function AddEmpForm() {
  const nav = useNavigate();
  const [emp, setEmp] = useState({
    name: '',
    photo: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    birthday: '',
    location: '',
  });

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      const res = await axios.post('https://employee-crud-server-svou.onrender.com/employees', emp);
      if (res.status === 201) {
        alert('Employee added successfully!');
        nav('/');
      }
    } catch (err) {
      alert('Error adding employee');
    }
  };

  return (
    <div className="container my-5 p-4 shadow-lg rounded-4 bg-light">
      <h3 className="text-center mb-4 fw-bold text-success">Add New Employee</h3>

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
          <Button variant="success" onClick={handleAdd}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddEmpForm;
