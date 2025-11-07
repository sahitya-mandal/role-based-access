import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * roles prop: array of allowed roles eg.['admin'] or ['admin', 'user']
 * usage: <RoleGuard roles={['admin']}><Admin /></RoleGuard>
 */

export default function RoleGuard({ roles, children }) {
  const { user } = useAuth();
  const location = useLocation();

  //not authenticated -> go to login, remember where we came from
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  //if roles provided and user role not is allowed roles -> forbidden
  if(roles && !roles.includes(user.role)){
    return <Navigate to="/forbidden" replace /> 
  }
  // Allowed
  return children
}