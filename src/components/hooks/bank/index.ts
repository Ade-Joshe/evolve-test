import { useFormik } from "formik";
import { useCallback, useState } from "react";
import api from "../../../api";
import { BankValidations } from "./validation";
import { IBankAccount, IBankAccountResponse } from "./interface";
import { useMandate } from "../mandate";

export const useBank = () => {

    const [response, setResponse] = useState<IBankAccountResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const { initMandate } = useMandate();

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
                initMandate();
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