import { useCallback, useEffect, useState } from 'react';
import api from '../../../api';
import { generateFields } from '../../../util';
import { IField } from "./interface";
export * from "../../form/debitMandate";

export const useMandate = () => {

    const initialValues = {
        keys: [],
        values: []
    }
    const [fields, setFields] = useState<IField>(initialValues);
    const [response, setResponse] = useState<any | null>(null);;
    const [error, setError] = useState<Error | null>(null);

    const getMandateFields = async () => {
        await api.get('/debitmandate')
            .then(res => {
                let fields = generateFields(res.data[0]);
                setFields(fields);
                // return fields;
            });
    }

    const initMandate = useCallback(() => {
        getMandateFields();
        // console.log("i initialized a mandate");
    }, []);

    const resetMandate = useCallback(() => {
        setFields(initialValues);
        setResponse(null);
        setError(null);
    }, []);

    return {
        initMandate,
        response,
        setResponse,
        error,
        setError,
        fields,
        resetFields: resetMandate
    }
};