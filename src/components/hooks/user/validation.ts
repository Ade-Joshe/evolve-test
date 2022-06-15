import * as yup from 'yup';

export const UserValidation = yup.object({
    age: yup.number().required('Age is required'),
    country: yup.string().required('Country is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    state: yup.string().required('state is required')
});
