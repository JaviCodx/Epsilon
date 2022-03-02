import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Settings } from '../pages/Settings';
import { Dashboard } from '../pages/Dashboard';
import { NotFound } from '../pages/NotFound';

export const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/dashboard"  element={<Dashboard />}/>
        <Route path="/settings"  element={<Settings />}/>
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </BrowserRouter>
  )
}