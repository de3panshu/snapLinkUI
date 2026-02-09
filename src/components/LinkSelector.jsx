import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
const LinkSelector = () => {
    return (
        <div className="d-flex fs-3 border-primary border border-2 rounded p-2 text-secondary align-items-center justify-content-between">
            <input type="text" className="form-control shadow-none w-100 border-0" placeholder="Enter your long URL here" />
            <FontAwesomeIcon className="" icon={faClipboard} />
        </div>
    );
}
export default LinkSelector;