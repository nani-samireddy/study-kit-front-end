import { useLoaderData } from 'react-router-dom';
import './ExamPage.css'
import TestModesCard from '../../Components/styledComponents';
import Navbar from '../../Components/Navbar/Navbar';
import Chip from '../../Components/Chip/Chip';
import apecetData from '../../Utils/dummyData';
const ExamPage = () => {
    const examDetails = useLoaderData();
    return (
        <div className="Exampage">
            <Navbar />
            {
                // Header
            }
            <div className="headerContainer">
                <div className="header">
                    <h1 className='examTitle'>{examDetails.examName}</h1>
                    <p className='examDescription'>{examDetails.examDescription}</p>
                </div>
            </div>
            {
                // Test Modes Cards
            }
            <div className="testModesCardsContainer">
                <div className="testModesCards">
                    <TestModesCard bg="#E1FDBE">
                        <span>
                            Attempt<br /> Random Test
                        </span>
                    </TestModesCard>
                    <TestModesCard bg="#FEA3A8">
                        <span>
                            Attempt<br /> Previous years
                        </span>
                    </TestModesCard>
                    <a href='#customTestContainer'>
                        <TestModesCard bg="#A3D8FE" >
                            <span>
                                Attempt<br /> Custom Test
                            </span>
                        </TestModesCard>
                    </a>
                </div>
            </div>
            {
                // Custom Test Section  
            }
            <div id="customTestContainer" className='customTestContainer'>
                <div className="customTestTitleContainer">
                    <h1>Customize your Test 🚀</h1>
                    <p>Select the parts to include in your test</p>
                </div>

                <div className="customTestChipsContainer">
                    <div className="customTestChips">
                        {apecetData.subjects.map((subject, index) => {
                            return (<Chip name={subject.name} isSelected={false} />);
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamPage;