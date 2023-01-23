import './StreamPage.css'
import Navbar from '../../../Components/Navbar/Navbar';
import ExampageHeader from '../../../Components/ExamPageHeader/ExamPageHeader';
import SectionHeading from '../../../Components/SectionHeading/SectionHeading';
import { useLoaderData } from 'react-router-dom';
import ListTable from '../../../Components/ListTable/ListTable';


const StreamPage = () => {
    const examStreamsDetails = useLoaderData();
    console.log(examStreamsDetails);

    return (
        <div>
            <Navbar />
            <ExampageHeader examName={examStreamsDetails.exam.name} examDescription={examStreamsDetails.exam.description} />
            <div className="streamPageContainer">
                <SectionHeading title={"Choose your Branch/Stream 🗺️"} subTitle={"Select your stream from the below list to contine"} />
                <ListTable
                    cols={["SNO", "code", "name"]}
                    colNames={["streamCode", "streamName"]}
                    data={examStreamsDetails.streams}
                    link={"/ExamPage/" + examStreamsDetails.exam["_id"] + "/"}
                    id={"_id"}

                />

            </div>

        </div>
    );
}

export default StreamPage;