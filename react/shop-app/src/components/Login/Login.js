import { useState } from 'react'
import InputField from './InputField'
import styles from './Login.module.css'

const defaultFormFields = {
    email: {
        value: ''
    },
    password: {
        value: ''
    }
}

const Login = ({ onSubmit }) => {
    const [form, setForm] = useState(defaultFormFields)

    const changeHandler = (event) => {
        const {
            target: {
                name,
                value
            }
        } = event;

        setForm({
            ...form,
            [name]: { value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formValues = Object.values(form);
        if (formValues.some(f => f.value === '')) {
            return;
        }
        onSubmit({
            email: form.email.value,
            password: form.password.value
        })
    }

    return(
        <div className={styles['login-container']}>
            <div className={styles['login-center']}>
                <div className={styles['login-header']}>
                    <h1>Login</h1>
                    <p>Please login using account details below</p>
                </div>
                <form className={styles['input-container']} onSubmit={submitHandler}>
                    <InputField type="email" placeholder="Email address" onChange={changeHandler}/>
                    <InputField type="password" placeholder="Password" onChange={changeHandler} />
                    <p className={styles['forgot-password']}>Forgot your password?</p>
                    <button>Sign in</button>
                    <p className={styles['create-account']}>Don't have an account? Create account</p>
                </form>
            </div>
        </div>
    )


}

export default Login