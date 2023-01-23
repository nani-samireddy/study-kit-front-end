import { NavLink } from 'react-router-dom';
import { Dtd, Ftd, Pbutton } from '../../../Components/styledComponents';
import { faceIcon } from '../../../Utils/constants';
import './TestPreview.css';
const TestPreview = () => {
    return (
        <div className='tp-page'>
            <nav className='tp-nav'>
                <div className="tp-nav-title">Study Kit</div>
                <NavLink className="tp-nav-profile">
                    <div className="tp-nav-profile-name">Profile</div>
                    <div className="tp-nav-profile-icon">{faceIcon}</div>
                </NavLink>
            </nav>
            <div className='tp-page-subtitle'> Free Mock Test</div>
            <div className="tp-page-test-details-container">
                <div className="tp-page-td-title">TestDetails</div>
                <div className="tp-page-test-details">
                    <table>
                        <tr>
                            <Ftd>Name</Ftd>
                            <Dtd>APECET COMPUTER SCIENCE FULL RANDOM TEST</Dtd>
                        </tr>
                        <tr>
                            <Ftd>Exam</Ftd>
                            <Dtd>APECET</Dtd>
                        </tr>
                        <tr>
                            <Ftd>Duration</Ftd>
                            <Dtd>60mins</Dtd>
                        </tr>
                        <tr>
                            <Ftd>Mode</Ftd>
                            <Dtd>Custom(Chemistry, Physics, Computers)</Dtd>
                        </tr>
                        <tr>
                            <Ftd>Total Marks</Ftd>
                            <Dtd>150</Dtd>
                        </tr>
                    </table>
                </div>
                <Pbutton>
                    Start Test
                </Pbutton>
            </div>
        </div>
    );
}

export default TestPreview;