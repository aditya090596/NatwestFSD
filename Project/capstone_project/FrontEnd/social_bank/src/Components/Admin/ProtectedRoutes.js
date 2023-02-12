import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {

    const data = localStorage.getItem('usertype');
    return (data === 'admin') ? <Outlet /> : <Navigate to={"/login"} />

};

export default ProtectedRoutes;
