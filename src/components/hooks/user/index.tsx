import { useCallback, useState } from 'react';
import api from '../../../api';
import { useFormik } from "formik";
import { UserValidation } from './validation';
import { IProfile, IUserResponse } from "./interface"

export const useUser = () => {

    const [response, setResponse] = useState<IUserResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const { ...rest } = useFormik({
        initialValues: {
            age: 0,
            country: '',
            firstName: '',
            lastName: '',
            state: ''
        } as IProfile,
        onSubmit: (values) => createUser(values),
        validationSchema: UserValidation
    });

    const createUser = useCallback(async (value: IProfile) => {
        await api.post('/profile', value)
            .then(res => {
                setResponse(res.data);
            }).catch(err => {
                setError(err);
            });
    }, []);

    return {
        userForm: rest,
        error,
        response
    }
}
