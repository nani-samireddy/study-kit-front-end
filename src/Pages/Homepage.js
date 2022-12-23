import Searchbar from "../Components/SearchBar/searchBar";
import SearchModal from "../Components/SearchModal/searchModal";
import { useState } from "react";
const Homepage = () => {
    const [showSearchModal, toggleSearhcModal] = useState(false);
    return (<div>
        <Searchbar onClick={() => { toggleSearhcModal(!showSearchModal) }} />
       {showSearchModal && <SearchModal showSearchModal={showSearchModal} toggleSearhcModal={toggleSearhcModal} />}
    </div>);
}

export default Homepage;