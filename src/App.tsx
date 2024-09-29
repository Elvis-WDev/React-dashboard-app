// React
import { useEffect } from 'react';
// Interfaces
import { LoginResponse } from './hooks/interfaces/Atuh.interfaces';
// Redux
import { AppDispatch, RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout } from './store';
// Routes
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoutes } from './router/Private.router';
import { PublicRoutes } from './router/Public.router';
// Syiles
import './App.css'
import 'animate.css';
import useTheme from './hooks/useTheme';
// Plugins
import 'flatpickr/dist/l10n/es.js';


export const App: React.FC = () => {

  const token = useSelector((state: RootState) => state.auth.user?.token);

  const theme = useSelector((state: RootState) => state.ui.theme);

  const { toggleTheme } = useTheme()

  const dispatch = useDispatch<AppDispatch>();

  // Recuperar sesión del usuario
  useEffect(() => {

    try {
      const user = localStorage.getItem('user');
      const status = localStorage.getItem('status');
      const message = localStorage.getItem('message');

      if (user && status && message) {

        const parsedUser = JSON.parse(user);

        if (parsedUser && typeof parsedUser === 'object') {

          const persistData: LoginResponse = {
            status: status,
            message: message,
            user: parsedUser,
          };

          // Restaurar el estado en Redux
          dispatch(onLogin(persistData));
        }
      }

    } catch (error) {
      dispatch(onLogout());
      console.error('Error parsing user data from localStorage:', error);
    }
  }, [dispatch, toggleTheme]);


  // Cambiar tema de Flatpickr
  useEffect(() => {

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';

    if (theme === 'dark') {
      link.href = '/node_modules/flatpickr/dist/themes/dark.css';
    } else {
      link.href = '/node_modules/flatpickr/dist/flatpickr.min.css';
    }

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [theme]);

  return (
    <Router>
      {/* Si hay un token, renderizar las rutas privadas, si no, las rutas públicas */}
      {token ? <PrivateRoutes /> : <PublicRoutes />}
    </Router>
  );
};