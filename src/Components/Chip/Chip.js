import './Chip.css'
import { selected, unselected } from '../../Utils/constants';
const Chip = ({ name, isSelected }) => {
    return (
        <div className="chipContainer">
            <div className="iconContainer">
                {isSelected ? selected : unselected}
            </div>
            <div className="nameContainer">
                <h1>{name}</h1>
            </div>
        </div>
    );
}

export default Chip;