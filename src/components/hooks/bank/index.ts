import { useFormik } from "formik";
import { useCallback, useState } from "react";
import api from "../../../api";
import { BankValidations } from "./validation";
import { IBankAccount, IBankAccountResponse } from "./interface";

export const useBank = () => {

    const [response, setResponse] = useState<IBankAccountResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const { ...rest } = useFormik({
        initialValues: {
            accountName: '',
            accountNumber: '',
            bankName: ''
        } as IBankAccount,
        onSubmit: (values) => createBank(values),
        validationSchema: BankValidations
    });

    const createBank = useCallback(async (value: IBankAccount) => {
        await api.post('/bank', value)
            .then(res => {
                setResponse(res.data);
            }).catch(err => {
                setError(err);
            });
    }, []);

    return {
        bankForm: rest,
        error,
        response
    }
}