import Searchbar from "../../Components/SearchBar/searchBar";
import SearchModal from "../../Components/SearchModal/searchModal";
import { useState } from "react";
import "./Homepage.css";
const Homepage = () => {
    const [showSearchModal, toggleSearhcModal] = useState(false);
    return (<div className="HomeBody">
        <Searchbar onClick={() => { toggleSearhcModal(!showSearchModal) }} />
        {showSearchModal && <SearchModal showSearchModal={showSearchModal} toggleSearhcModal={toggleSearhcModal} />}
        <div className="cardsContainer">
            <div className="containerTitle">
                <h1>Recently updated...</h1>
            </div>
        </div>
    </div>);
}

export default Homepage;