import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';

export default function NavRoutes() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={<ProtectedRoute>{/* <Admin /> */}</ProtectedRoute>}
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
