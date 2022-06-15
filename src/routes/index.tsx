import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { Home, Bank } from '../pages';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={Home()} />)
                <Route path={"/bank"} element={Bank()} />)

                <Route path={"*"} element={<Navigate to={"/"} />} />)
            </Routes>
        </Router>
    )
};
