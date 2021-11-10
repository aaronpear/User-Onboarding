import React from "react";

const Form = (props) => {
    const { 
        values, 
        submit, 
        change, 
        disabled, 
        errors 
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }
    

    return (
        <div className='form-container' onSubmit={onSubmit}>
            <form>
                <div className='error-container'>
                    <div className='errors'>
                        {/* <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.agreeToTerms}</div> */}
                    </div>
                </div>
                <div className='inputs-container'>
                    <label>Name
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label>Email
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='email'
                        />
                    </label>
                    <label>Password
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                        />
                    </label>
                    <label>Terms of Service
                        <input 
                            onChange={onChange}
                            name='agreeToTerms'
                            type='checkbox'
                            checked={values.agreeToTerms}
                        />
                    </label>
                </div>
                <button className='submit-button' disabled={disabled}>submit</button>
            </form>
        </div>
    );
}

export default Form;