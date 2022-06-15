import React, { useEffect } from 'react'
import { useBank, useMandate } from '../../components';

export const Bank = () => {

    const { bankForm: { handleChange, handleSubmit, values, isSubmitting }, response } = useBank();
    const { response: responseFromCreateMandate } = useMandate();

    useEffect(() => {
        // perform actions  when the response come
        if (response) {
            // console.log({ response });

        }
    }, [response]);

    useEffect(() => {
        // console.log({ responseFromCreateMandate });
    }, [responseFromCreateMandate]);

    return (
        <div className="App">
            <div className="App-body">
                <form onSubmit={handleSubmit}>
                    <h2>Create Bank Account</h2>
                    <label>
                        Account Name:
                        <input required type="text" name="accountName" value={values.accountName} onChange={handleChange} />
                    </label>
                    <label>
                        Account Number:
                        <input required type="text" name="accountNumber" value={values.accountNumber} onChange={handleChange} />
                    </label>
                    <label>
                        Bank Name:
                        <input required type="text" name="bankName" value={values.bankName} onChange={handleChange} />
                    </label>

                    <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Processing..." : "Submit"}</button>
                </form>
            </div>
        </div>
    )
}
