import { ChangeEvent, useState } from 'react';
import { TestEmail, TestPassword } from '../helpers/formValidation';

export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState);
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { value, name } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        if (name === 'email') {
            validateEmail(value)
        }

        if (name === 'password') {
            validatePassword(value)
        }

    }

    // validaciones
    const validateEmail = (email: string) => {

        const emailMessageError = TestEmail(email);

        setErrors(prev => ({
            ...prev,
            email: emailMessageError
        }));

        if (emailMessageError === null) return true;

        return false;

    }

    const validatePassword = (password: string | null) => {

        if (password === null) return true;

        const passwordMessageError = TestPassword(password);

        setErrors(prev => ({
            ...prev,
            password: passwordMessageError
        }));

        if (passwordMessageError) return true;

        return false;

    }

    const resetForm = () => {
        setFormData({ ...initState })
        setErrors({})
    }


    return {
        ...formData,

        // properties
        formData,

        // Methods
        validateEmail,
        validatePassword,
        onChange,
        resetForm,
        errors
    }
}

