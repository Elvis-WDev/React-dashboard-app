
import { UserDataLogin } from '../Data/UserLogin.data';
import { LoginFormValues } from '../pages/interfaces/Login.interface';
import { onLogin, onLogout } from '../store/auth/auth.slice';
import { AppDispatch } from '../store/store';

export const useAuth = () => {

    const Login = ({ email, password }: LoginFormValues) => async (dispatch: AppDispatch) => {

        try {

            console.log(email, password)

            // const { data }: LoginApiResponse = await Api_service.get(`/login`);

            const { data } = UserDataLogin;

            dispatch(onLogin(data))

        } catch (error) {

            console.log(error)

        }
    };

    const Logout = () => (dispatch: AppDispatch) => {
        dispatch(onLogout());
    };

    return {

        Login,
        Logout
    }
}