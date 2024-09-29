import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { onThemeMode } from '../store';

const useTheme = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [theme, setTheme] = useState(() => {
        // Verifica si hay un tema guardado en localStorage
        if (localStorage.theme) {
            return localStorage.theme;
        }

        // Si no hay un tema guardado, revisa la preferencia del sistema
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        // Si no hay nada, por defecto será 'light'
        return 'light';
    });

    useEffect(() => {
        // Agrega o elimina la clase 'dark' en el <html> dependiendo del tema seleccionado
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Guarda el tema seleccionado en localStorage
        localStorage.setItem('theme', theme);
        dispatch(onThemeMode({ theme }))

    }, [dispatch, theme]);

    const toggleTheme = () => {

        setTheme((prevTheme: string) => (prevTheme === 'dark' ? 'light' : 'dark'));

    };

    return { theme, toggleTheme };
};

export default useTheme;

export const useThemeState = () => {
    return useSelector((state: RootState) => state.ui.theme);
};
