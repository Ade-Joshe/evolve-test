import React from 'react';
import './App.css';
import { AppRouter } from './routes';
import { DebitMandateForm, useMandate } from './components';

function App() {
  return (
    <>
      <DebitMandateForm />
      <AppRouter />
    </>
  );
}

export default App;
