import { FormEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useForm } from '../../hooks/useForm';
import { LoginFormValues } from '../interfaces/Login.interface';
import logo from '/Logo.svg'

const initialStateLogin: LoginFormValues = {
    email: '',
    password: ''
}

export const Login = () => {

    const { Login } = useAuth();

    const dispatch = useDispatch<AppDispatch>();

    const { formData, onChange, email, password, errors, validateEmail } = useForm(initialStateLogin);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const validEmail = validateEmail(email);

        if (validEmail) {
            dispatch(Login(formData));
        }
    }

    return (

        <>
            <section className="bg-gray-50 dark:bg-gray-900 h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                        LOGO
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Log in
                            </h1>
                            <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Correo electrónico
                                    </label>
                                    <input id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={onChange}
                                        autoComplete="email"
                                        className={`bg-gray-50 border w-full p-2.5 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'focus:ring-red-100 border-red-300 ring-red-300' : 'focus:ring-indigo-600 border-gray-300 ring-gray-300'}`}
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Contraseña
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={onChange}
                                        autoComplete="current-password"
                                        className={`bg-gray-50 border border-gray-300 ring-gray-300 w-full p-2.5 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-400">Recuerdame</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">Olvidaste tu contraseña?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                >
                                    Ingresar
                                </button>
                                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    No tienes una cuenta? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrarse</a>
                                </p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};