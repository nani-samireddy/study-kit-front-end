import './google_auth.css';
import { googleIcon } from '../../Utils/constants';
const GoogleAuth = () => {
    return (
        <>
            <div className="auth-button">
                <div className="auth-button-leading-icon">
                    {googleIcon}
                </div>
                <div className="auth-button-text">
                    <span>continue with Google</span>
                </div>

            </div>
        </>
    );
}

export default GoogleAuth;