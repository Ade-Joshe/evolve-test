import * as yup from 'yup';

export const BankValidations = yup.object({
    accountName: yup.string().required('Account name is required'),
    accountNumber: yup.string().length(10).required('Account number is required')
        .test('accountNumber', 'Account number is invalid', value => {
            if (value) return /^[0-9]{10}$/.test(value);
            return true;
        }),
    bankName: yup.string().required('Bank name is required')
});
