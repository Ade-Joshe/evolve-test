import React, { useCallback, useState } from 'react';
import api from '../../../api';
import { generateFields } from '../../../util';
import { IField } from "./interface";

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

    // const renderForm = useCallback(() => {
    //     let root = document.getElementById('mandate-root');
    //     if (root) {
    //          root?.appendChild(DebitMandateForm);
    //          ReactDOM.createPortal(DebitMandateForm(), root);
    //     }
    // }, [fields]);

    const initMandate = useCallback(() => {
        return getMandateFields();
    }, []);

    return {
        initMandate,
        fields,
        resetFields: () => setFields(initialValues)
    }
};
