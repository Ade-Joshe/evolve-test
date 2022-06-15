import { useCallback, useState } from 'react';
import api from '../../../api';
import { generateFields } from '../../../util';
import { IField } from "./interface";
export * from "./component";

export const useMandate = () => {

    const initialValues = {
        keys: [],
        values: []
    }
    const [fields, setFields] = useState<IField>(initialValues);

    const getMandateFields = useCallback(async () => {
        await api.get('/debitmandate')
            .then(res => {
                let fields = generateFields(res.data[0]);
                setFields(fields);
                return fields;
            });
    }, []);

    const initMandate = useCallback(() => {
        return getMandateFields();
    }, []);

    return {
        initMandate,
        fields,
        resetFields: () => setFields(initialValues)
    }
};
