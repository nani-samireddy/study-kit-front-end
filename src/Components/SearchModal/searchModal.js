import './searchModal.css';
import { useState } from 'react';

const SearchModal = ({ showSearchModal, toggleSearhcModal }) => {
    let exams = [
        { name: "apeamcet", },
        { name: "tseamcet", },
        { name: "apecet", },
        { name: "tsecet", },
    ];
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div>
            <div className="cover" onClick={
                (e) => {
                    toggleSearhcModal(!showSearchModal);
                }} >

            </div>
            <div className="modal" >

                <div className="searchModalContainer">
                    <div className="closebtn" onClick={
                        (e) => {
                            toggleSearhcModal(!showSearchModal);
                        }
                    }>
                        &times;
                    </div>
                    <div className="inputContainer">
                        <input type="text"
                            name="searchQuery"
                            placeholder='Type here...'
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value) }} />
                    </div>
                    <div className="searchResultsContainer">
                        {exams.filter((exam) => {
                            if (searchQuery === "") {
                                return exam;
                            } else if (exam.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                                return exam;
                            }
                        }).map((exam) => {
                            return (
                                <div className="searchResult">
                                    <div className="examName">
                                        {exam.name}
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;