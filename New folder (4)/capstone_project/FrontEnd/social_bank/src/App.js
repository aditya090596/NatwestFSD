import './App.css';
import AdminLogin from './Components/Admin/AdminLogin';
import CustLogin from './Components/User/UserLogin';
import Login from './Components/Controller/LoginController';
import AdminRegister from './Components/Admin/AdminRegister';
import UserRegister from './Components/User/UserRegister';
import Register from './Components/Controller/RegistrationController';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ChangeUserPassword from "./Components/User/ChangeUserPassword"
import ChangeAdminPassword from "./Components/Admin/ChangeAdminPassword"
import ForgotPassword from "./Components/ForgotPassword"
import CustomerDashboard from "./Components/User/UserDashboard"
import AdminDashboard from "./Components/Admin/AdminDashboard"
import ContactUs from "./Components/User/ContactUs"
import UserProtectedRoutes from './Components/User/ProtectedRoutes';
import AdminProtectedRoutes from './Components/Admin/ProtectedRoutes';

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/user/login" element={<CustLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Protected Routes for customers*/}
        <Route path="/user" element={<UserProtectedRoutes />}>

          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="changepassword" element={<ChangeUserPassword />} />

        </Route>

        {/* Protected Routes for Employees*/}
        <Route path="/admin" element={<AdminProtectedRoutes />}>

          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="changepassword" element={<ChangeAdminPassword />} />

        </Route>

        {/* Fall Back Route in Case of Incorrect Path */}
        <Route path="*" element={<CustLogin />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
