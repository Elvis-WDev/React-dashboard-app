import { rgx_email, LangEs, rgx_password } from '../config';

export const TestEmail = (email: string): string | null => {
    if (email === '') return LangEs.email.required;
    if (!rgx_email.test(email)) return LangEs.email.invalid;
    // Si no hay errores, devuelve null
    return null;
};

export const TestPassword = (password: string): string | null => {
    if (password === '') return LangEs.password.required;
    if (password.length < 8) return LangEs.password.min;
    if (!rgx_password.test(password)) return LangEs.password.invalid;
    // Si no hay errores, devuelve null
    return null;
};