import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { BusquedaScreen } from '../screens/BusquedaScreen';
import { DetallesScreen } from '../screens/DetallesScreen';



export const AppRouter = () => {

    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<BusquedaScreen />} />
                    
                    <Route path='/detalles' element={<DetallesScreen/>} />

                    <Route 
                        path="*" 
                        element={<Navigate to="/" />} 
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
