import React, { useEffect, FC, useCallback } from "react";
import api from "../../../api";
import { useFormik } from "formik";
import styles from "./debit.module.css"
import { useMandate } from "../../hooks/mandate";
import { logo } from "../../../assets";

export const DebitMandateForm = () => {

    const { resetFields, setResponse, setError, fields } = useMandate();
    const { values, handleSubmit, handleChange, setValues, isSubmitting } = useFormik<any>({
        initialValues: {},
        onSubmit: (values) => activateDebitMandate(values)
    });

    const activateDebitMandate = useCallback(async (values: any) => {    //any only makes sense because the formik is not aware of the type of the values
        await api.post('/activatemandate', values)
            .then(res => {
                setResponse(res.data);
                alert("Mandate activated successfully");
                resetFields();
                return;
            }).catch(err => {
                setError(err);
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
        fields.keys.length ?
            <div className={styles.overlay}>
                <form onSubmit={handleSubmit}>
                    <img alt="" src={logo} />
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
            : null
    )
}