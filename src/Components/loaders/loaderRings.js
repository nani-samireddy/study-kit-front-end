import "./loaders.css";
import { RingLoader } from "react-spinners";

const loaderRings = () => {
    return (
        <div className="loader-container">
            <RingLoader color="#36d7b7" />
        </div>);
}

export default loaderRings;