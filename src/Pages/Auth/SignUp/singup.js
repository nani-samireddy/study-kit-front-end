import GoogleAuth from '../../../Components/google_auth/google_auth';
import '../auth.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='auth-container'>
            <h1 className='auth-heading'>Hey! Register now <br />Start preparing</h1>
            <div className="auth-form-container">
                <form className='auth-form'>
                    <input
                        className="input name"
                        type="text" name="name"
                        id="nameInput"
                        placeholder='Enter your name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="input email"
                        type="email" name="email"
                        id="emailInput"
                        placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="input password"
                        type="password"
                        name="password"
                        id="passwordInput"
                        placeholder='Create your password🙈'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={
                            () => {
                                console.log("sign up");
                                console.log(name, email, password);
                            }}
                    >
                        Sign In
                    </button>
                    <span>Already have an accout? <NavLink to="/signin"><span className='authredirectiontext'>SingIn</span></NavLink></span>
                    <div className="line"></div>
                    <GoogleAuth />
                </form>
            </div>
        </div >
    );
}

export default SignUp;