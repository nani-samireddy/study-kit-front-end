import Searchbar from "../../Components/SearchBar/searchBar";
import SearchModal from "../../Components/SearchModal/searchModal";
import { useState } from "react";
import "./Homepage.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { dummyData } from "../../Utils/dummyData";






const Homepage = () => {

    const [showSearchModal, toggleSearhcModal] = useState(false);
    return (<div className="HomeBody">
        <Searchbar onClick={() => { toggleSearhcModal(!showSearchModal) }} />
        {showSearchModal && <SearchModal showSearchModal={showSearchModal} toggleSearhcModal={toggleSearhcModal} />}
        <div className="contentContainer">
            <div className="containerTitle">
                <h1>Recently updated...</h1>
            </div>
            <div className="cardsContainer">
                {dummyData.map((card) => <NavLink to={"/Exampage/" + card.name}><Card title={card.title} description={card.description} /></NavLink>)}
            </div>
        </div>
    </div>);
}

export default Homepage;