import Searchbar from "../../Components/SearchBar/searchBar";
import SearchModal from "../../Components/SearchModal/searchModal";
import { useState } from "react";
import "./Homepage.css";
import Card from "./Card";




const cardData = [
    { title: "APEAMCET", description: "AP EAMCET entrance test." },
    { title: "TSEAMCET", description: "TS EAMCET entrance test." },
    { title: "APECET", description: "AP Polycet entrance test." },
    { title: "TSECET", description: "TS Polycet entrance test." },
    { title: "AP ECET", description: "AP ECET entrance test." },
];


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
                {cardData.map((card) => <Card title={card.title} description={card.description} />)}
            </div>
        </div>
    </div>);
}

export default Homepage;