import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../store/rootReducer';

const RequireUnauth = () => {
    const userState = useSelector((state: RootState) => state.user);

    return userState.user
        ? <Navigate to={'../home'} replace />
        : <Outlet />
};

export default RequireUnauth;