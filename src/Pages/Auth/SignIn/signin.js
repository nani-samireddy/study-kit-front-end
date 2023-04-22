import GoogleAuth from '../../../Components/google_auth/google_auth';
import '../auth.css';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { loaderRings } from '../../../Components/loaders/loaderRings';


const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const handleContinue = async (e) => {
        e.preventDefault();
        console.log("sign in");
        console.log(email, password);
        await signIn(email, password)
            .then((userCredential) => {
                navigate('/', { replace: true });

            })
            .catch((error) => { console.log(error) });
    }


    return (
        <div className='auth-container'>

            <h1 className='auth-heading'>Welcome back!</h1>
            <div className="auth-form-container">
                <div className='auth-form'>
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
                        placeholder='Enter your password🙈'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleContinue}
                    >
                        Sign In
                    </button>
                    <span>Don't have an account? <NavLink to="/signup"><span className='authredirectiontext'>SingUp</span></NavLink></span>
                    <div className="line"></div>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
}

export default SingIn;