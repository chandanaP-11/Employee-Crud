import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmpListModernTable from './components/EmpListTable';
import EditEmpForm from './pages/EditEmpForm';
import AddEmpForm from './pages/AddEmpForm'; // <- this is the Add form

function App() {
  return (
    <>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<EmpListModernTable />} />
          <Route path="/add" element={<AddEmpForm />} />
          <Route path="/edit/:id" element={<EditEmpForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
