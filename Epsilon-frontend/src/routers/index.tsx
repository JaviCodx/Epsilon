import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { NotFound } from '../pages/NotFound';

export const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/dashboard"  element={<Dashboard />}/>
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </BrowserRouter>
  )
}