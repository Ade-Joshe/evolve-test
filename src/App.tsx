import React, { useEffect } from 'react';
import './App.css';
import { useProfile } from './components';
import { DebitMandateForm } from './components/hooks/mandate/component';

function App() {

  const { user, mandate } = useProfile();
  const { userForm: { handleChange, handleSubmit, values } } = user;
  const { fields, initMandate } = mandate;

  useEffect(() => {
    initMandate();
  }, []);

  const onSuccess = (response: any) => {
    console.log({ response }); // callbacks for success
  }

  return (
    <>
      {fields.keys.length ? <DebitMandateForm fields={fields} callback={onSuccess} /> : null}
      <div className="App">
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
            </label>
            <label>
              Age:
              <input type="number" name="age" value={values.age} onChange={handleChange} />
            </label>
            <label>
              Country:
              <input type="text" name="country" value={values.country} onChange={handleChange} />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />
            </label>
            <label>
              State:
              <input type="text" name="state" value={values.state} onChange={handleChange} />
            </label>

            <button type='submit'>Submit</button>
          </form>
        </header>
      </div>

    </>
  );
}

export default App;
