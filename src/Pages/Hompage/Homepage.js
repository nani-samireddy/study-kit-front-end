import Searchbar from "../../Components/SearchBar/searchBar";
import SearchModal from "../../Components/SearchModal/searchModal";
import { useState, useEffect } from "react";
import "./Homepage.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { fetchExamsList } from "../../services/database";





const Homepage = () => {

    const [examsList, setExamsList] = useState([]);
    useEffect(() => {
        fetchExamsList().then((data) => {
            setExamsList(data);
        });
    }, []);

    const [showSearchModal, toggleSearhcModal] = useState(false);
    return (
        <div className="HomeBody">
            <Searchbar onClick={() => { toggleSearhcModal(!showSearchModal) }} />
            {showSearchModal && <SearchModal showSearchModal={showSearchModal} toggleSearhcModal={toggleSearhcModal} />}
            <div className="contentContainer">
                <div className="containerTitle">
                    <h1>Recently updated...</h1>
                </div>
                <div className="cardsContainer">
                    {examsList.map((exam) =>

                        <NavLink to={"/ExamPage/" + exam._id}>
                            <Card title={exam.name} description={exam.description} />
                        </NavLink>)}
                </div>
            </div>
        </div>
    );
}

export default Homepage;