import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "https://employee-crud-server-svou.onrender.com/employee";

// Fetch all employees
export const fetchEmployees = createAsyncThunk('employee/fetch', async () => {
  const res = await axios.get(api);
  return res.data;
});

// Delete employee
export const deleteEmployee = createAsyncThunk('employee/delete', async (id) => {
  await axios.delete(`${api}/${id}`);
  return id;
});

// Update employee
export const updateEmployee = createAsyncThunk('employee/update', async ({ id, updatedData }) => {
  const res = await axios.put(`${api}/${id}`, updatedData);
  return res.data;
});

// Add new employee (optional)
export const addEmployee = createAsyncThunk('employee/add', async (newData) => {
  const res = await axios.post(api, newData);
  return res.data;
});

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;

      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // DELETE
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(emp => emp.id !== action.payload);
      })

      // UPDATE
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(emp => emp.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })

      // ADD
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      });
  },
});

export default employeeSlice.reducer;
