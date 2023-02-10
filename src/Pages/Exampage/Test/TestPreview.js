import { NavLink, useLoaderData } from 'react-router-dom';
import { Dtd, Ftd, Pbutton } from '../../../Components/styledComponents';
import { createTestInstanceAndStartTheTest } from '../../../services/test_functions';
import { faceIcon } from '../../../Utils/constants';
import './TestPreview.css';

const TestPreview = () => {
    const testDeatils = useLoaderData();

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
                        <tbody>
                            <tr>
                                <Ftd>Name</Ftd>
                                <Dtd>{testDeatils.name}</Dtd>
                            </tr>
                            <tr>
                                <Ftd>Exam</Ftd>
                                <Dtd>{testDeatils.examName}</Dtd>
                            </tr>
                            <tr>
                                <Ftd>Duration</Ftd>
                                <Dtd>{testDeatils.duration}</Dtd>
                            </tr>
                            <tr>
                                <Ftd>Mode</Ftd>
                                <Dtd>{testDeatils.mode}( {testDeatils.selectedSubjects.join(", ")} )</Dtd>
                            </tr>
                            <tr>
                                <Ftd>Total Marks</Ftd>
                                <Dtd>{testDeatils.totalMarks}</Dtd>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Pbutton onClick={() => { createTestInstanceAndStartTheTest(testDeatils) }}>
                    Start Test
                </Pbutton>
            </div>
        </div>
    );
}

export default TestPreview;