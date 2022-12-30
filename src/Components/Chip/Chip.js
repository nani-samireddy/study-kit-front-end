import './Chip.css'
import { selected, unselected } from '../../Utils/constants';
import { ChipContainer } from '../styledComponents';
const Chip = ({ name, isSelected }) => {
   
    return (
        <ChipContainer isSelected={isSelected }  >
            <div className="iconContainer">
                {isSelected ? selected : unselected}
            </div>
            <div className="nameContainer">
                <h1>{name}</h1>
            </div>
        </ChipContainer>
    );
}

export default Chip;