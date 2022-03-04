import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Settings } from '../pages/Settings';
import { Dashboard } from '../pages/Dashboard';
import { NotFound } from '../pages/NotFound';
import { Schedule } from '../pages/Schedule';
import { Activity } from '../pages/Activity';
import { Workouts } from '../pages/Workouts';
import { Messages } from '../pages/Messages';

export const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/dashboard"  element={<Dashboard />}/>
        <Route path="/schedule"  element={<Schedule />}/>
        <Route path="/messages"  element={<Messages />}/>
        <Route path="/activity"  element={<Activity />}/>
        <Route path="/workouts"  element={<Workouts />}/>
        <Route path="/settings"  element={<Settings />}/>
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </BrowserRouter>
  )
}