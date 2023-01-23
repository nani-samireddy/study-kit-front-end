import { useLoaderData } from 'react-router-dom';
import './ExamPage.css'
import { TestModesCard } from '../../Components/styledComponents';
import Navbar from '../../Components/Navbar/Navbar';
import Chip from '../../Components/Chip/Chip';
import { useState } from 'react';
import ExampageHeader from '../../Components/ExamPageHeader/ExamPageHeader';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import ListTable from '../../Components/ListTable/ListTable';
import { NavLink } from 'react-router-dom';
const ExamPage = () => {
    const examDetails = useLoaderData();
    const [selectedSubjects, setSelectedSubjects] = useState([]);



    return (
        <div className="Exampage">
            <Navbar />
            {
                // Header
            }
            <ExampageHeader examName={examDetails.stream.streamName} examDescription={examDetails.exam.description} />
            {
                // Test Modes Cards
            }
            <div className="testModesCardsContainer">
                <div className="testModesCards">
                    <NavLink
                        to={"/tp/frt/" + examDetails.exam._id + "/" + examDetails.stream._id}
                        target="_blank"
                    >
                        <TestModesCard bg="#E1FDBE">
                            <span>
                                Attempt<br /> Random Test
                            </span>
                        </TestModesCard>
                    </NavLink>

                    <a href="#previousPapersSection">
                        <TestModesCard bg="#FEA3A8">
                            <span>
                                Attempt<br /> Previous years
                            </span>
                        </TestModesCard>
                    </a>
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
                <SectionHeading
                    title={"Customize your Test 🚀"}
                    subTitle={"Select the parts to include in your test"}
                />


                <div className="customTestChipsContainer">
                    <div className="customTestChips">
                        {examDetails.stream.subjects.map((subject, index) => {
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
                        {examDetails.stream.subjects.map((subject, index) => {

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
            <div className="previousPapersSection" id="previousPapersSection">
                <SectionHeading
                    title={"Attempt Previous years papers📑"}
                    subTitle={"Increase your confidence by attempting the previous test papers"}
                />
                <ListTable
                    cols={["SNO", "year", "name"]}
                    data={examDetails.previousPapers}
                    colNames={["year", "name"]}
                    link={"/tp/pp/"}
                    id={"previousPaperId"}
                />

            </div>
        </div>
    );
}

export default ExamPage;