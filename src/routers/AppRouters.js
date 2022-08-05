import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AgregarCita from '../components/AgregarCita';
import Home from '../components/Home';
import Login from '../components/Login';
import NavBars from '../components/NavBars';
import Register from '../components/Register';

const AppRouters = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBars/>
                <Routes>
                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/add" element={<AgregarCita/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouters;