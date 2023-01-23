import './ExamPageHeader.css';
const ExampageHeader = (
    { examName, examDescription }
) => {
    return (
        <div className="headerContainer">
            <div className="header">
                <h1 className='examTitle'>{examName}</h1>
                <p className='examDescription'>{examDescription}</p>
            </div>
        </div>
    );
}

export default ExampageHeader;