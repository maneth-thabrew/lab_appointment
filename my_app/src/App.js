import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import AddDepoartment from "./pages/AddDepartment/page";
import AddDoctors from "./pages/AddDoctors/page";
import AdminLogin from "./pages/AdminRegister/page";
import Appointments from "./pages/Appointments/page";
import BookingPatients from "./pages/Booking/page";
import CreateAppointment from "./pages/CreatAppointments/page";
import Dashboard from "./pages/Dashboard/page";
import Departments from "./pages/Departments/page";
import Doctors from "./pages/Doctors/page";
import DoctorsDynamic from "./pages/DoctorsDynamic/page";
import DoctorsPatients from "./pages/DoctorsPatients/page";
import EditDoctors from "./pages/EditDoctor/page";
import EditModal from "./pages/EditModal/page";
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import MyAppointments from "./pages/MyAppointments/page";
import Patients from "./pages/Patients/page";
import Reports from "./pages/Reports/page";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/CreatAppointments" element={<CreateAppointment />} />
          <Route path="/DoctorsDynamic" element={<DoctorsDynamic />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/AddDoctors" element={<AddDoctors />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/Patients" element={<Patients />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/MyAppointments" element={<MyAppointments />} />
          <Route path="/EditDoctor/:id" element={<EditDoctors />} />
          <Route path="/EditModal/:id" element={<EditModal />} />
          <Route path="/AddDepartment" element={<AddDepoartment />} />
          <Route path="/DoctorsPatients" element={<DoctorsPatients />} />
          <Route path="/Booking" element={<BookingPatients />} />
          <Route path="/AdminRegister" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
