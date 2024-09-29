import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '../pages/dashboard/Layouts/Dashboard.layout';
import { Dashboard, Profile, FormElements, FormLayouts, Alerts, NotFoundPage404, Buttons, Tables, Chart } from '../pages';

export const PrivateRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} /> {/* Página principal del dashboard */}
                <Route path="profile" element={<Profile />} />
                <Route path="forms/elements" element={<FormElements />} />
                <Route path="forms/layouts" element={<FormLayouts />} />
                <Route path="ui_elements/alerts" element={<Alerts />} />
                <Route path="ui_elements/buttons" element={<Buttons />} />
                <Route path="tables" element={<Tables />} />
                <Route path="charts" element={<Chart />} />
                {/* Página de error 404 para rutas privadas */}
                <Route path="*" element={<NotFoundPage404 />} />
            </Route>
            {/* Redirigir al dashboard si intenta acceder a una ruta privada no existente */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    );
};