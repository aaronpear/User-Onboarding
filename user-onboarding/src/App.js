import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  agreeToTerms: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  agreeToTerms: false
}
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password
    }
    // postNewUser(newUser);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create a New User</h1>
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </header>
    </div>
  );
}

export default App;
