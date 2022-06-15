import React, { useEffect, FC, useCallback } from "react";
import api from "../../../../api";
import { useFormik } from "formik";
import { IField } from "../interface";
import styles from "./debit.module.css"
import { useMandate } from "..";

interface DebigMandateFromProps {
    fields: IField;
    callback?: (values: any) => void;
}

export const DebitMandateForm: FC<DebigMandateFromProps> = ({ fields, callback }) => {

    const { values, handleSubmit, handleChange, setValues, isSubmitting } = useFormik<any>({
        initialValues: {},
        onSubmit: (values) => activateDebitMandate(values)
    });
    const { resetFields } = useMandate();

    const activateDebitMandate = useCallback(async (values: any) => {    //any only makes sense because the formik is not aware of the type of the values
        await api.post('/activatemandate', values)
            .then(res => {
                if (callback) callback({ response: res.data, error: null });
                alert("Mandate activated successfully");
                resetFields();
                return;
            }).catch(err => {
                if (callback) callback({ response: null, error: err.reponse });
            });
    }, []);

    useEffect(() => {
        let payload: { [key: string]: string } = {};

        fields.keys.forEach(key => {
            payload[key] = "";
        });
        setValues(payload);
    }, [fields]);

    return (
        <div className={styles.overlay}>
            <form onSubmit={handleSubmit}>
                {
                    fields.keys.map((element, index) => (
                        <div>
                            <label key={element + index}>
                                {fields.values[index]}
                            </label>
                            <input type="text" required name={element} value={values[element]} onChange={handleChange} placeholder={`Enter ${fields.values[index]}`} />
                        </div>
                    ))
                }

                <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Processing..." : "Submit"}</button>
            </form >
        </div>
    )
}