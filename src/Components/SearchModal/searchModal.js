import './searchModal.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { dummyData } from '../../Utils/dummyData';

const SearchModal = ({ showSearchModal, toggleSearhcModal }) => {

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
                        {dummyData.filter((exam) => {
                            if (searchQuery === "") {
                                return exam;
                            } else if (exam.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                                return exam;
                            }
                            else{
                                return null;
                            }
                        }).map((exam) => {
                            return (
                                <NavLink to={"/Exampage/" + exam.name}>
                                    <div className="searchResult">
                                        <div className="examName">
                                            {exam.title}
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;