import './SectionHeading.css'
const SectionHeading = ({ title, subTitle }) => {
    return (
        <div className="sectinTitleContainer">
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
}

export default SectionHeading;