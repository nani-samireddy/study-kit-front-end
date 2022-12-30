import { useLoaderData } from 'react-router-dom';
import './ExamPage.css'
import { TestModesCard } from '../../Components/styledComponents';
import Navbar from '../../Components/Navbar/Navbar';
import Chip from '../../Components/Chip/Chip';
import { useState } from 'react';

const ExamPage = () => {
    const examDetails = useLoaderData();
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    console.log(selectedSubjects);
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
                        {examDetails.subjects.map((subject, index) => {
                            if (selectedSubjects.includes(subject)) {
                                return (
                                    <div onClick={() => {
                                        setSelectedSubjects(selectedSubjects.filter((selectedSubject) => selectedSubject !== subject));

                                    }}>
                                        <Chip name={subject.name} isSelected={true} />
                                    </div>
                                );
                            } else { return null; }
                        })
                        }
                        {examDetails.subjects.map((subject, index) => {

                            if (!selectedSubjects.includes(subject)) {
                                return (
                                    <div onClick={() => {
                                        setSelectedSubjects([...selectedSubjects, subject]);

                                    }}>
                                        <Chip name={subject.name} isSelected={false} />
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}

                    </div>
                </div>
                <div className="startButtonContainer">
                    <div className="startButton" onClick={() => {
                        console.log("Custom Test Start Button Clicked");
                        console.log(selectedSubjects);

                    }}>
                        <span>Start 🚀</span>
                    </div>
                </div>
            </div>
            {
                // Previous Papers section
            }
            <div className="previousPapersSection">
                
            </div>
        </div>
    );
}

export default ExamPage;