import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components';

export const Home = () => {

    const { userForm: { handleChange, handleSubmit, values, isSubmitting }, response } = useUser();
    // const navigate = useNavigate();

    useEffect(() => {
        if (response) {
            // perform actions  when the response come
            // navigate('/bank');
        }
    }, [response]);

    return (
        <div className="App">
            <div className="App-body">
                <form onSubmit={handleSubmit}>
                    <h2>Create User</h2>
                    <label>
                        First Name:
                        <input required type="text" name="firstName" value={values.firstName} onChange={handleChange} />
                    </label>
                    <label>
                        Age:
                        <input required type="number" name="age" value={values.age} onChange={handleChange} />
                    </label>
                    <label>
                        Country:
                        <input required type="text" name="country" value={values.country} onChange={handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input required type="text" name="lastName" value={values.lastName} onChange={handleChange} />
                    </label>
                    <label>
                        State:
                        <input required type="text" name="state" value={values.state} onChange={handleChange} />
                    </label>

                    <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Processing..." : "Submit"}</button>
                </form>
            </div>
        </div>
    )
}
