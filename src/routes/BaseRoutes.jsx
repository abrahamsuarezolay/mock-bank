import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext, { AuthProvider } from "../contexts/AuthContext";
import LoginForm from '../components/Login/LoginForm/LoginForm';
import Home from '../components/Home/Home';
import Register from '../components/Login/RegisterForm/Register';
import { useContext } from 'react';
import ProtectedRoute from './ProtectedRoute';
const BaseRoutes = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            {/* Public Routes */}
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
          
            {/* Protected Routes */}
          
                <Route 
                    path="/home" 
                    element={
                    <ProtectedRoute
                        user={user}
                        redirectPath={"/"}>
                        <Home />
                    </ProtectedRoute>
                } />
            </Routes>
        </>
    )

}

export default BaseRoutes;