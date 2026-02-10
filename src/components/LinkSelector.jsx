import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
const LinkSelector = () => {
    const [url, setUrl] = useState('');
    const urlInputField = useRef("");
    const handleCopyFromClipboard = () => {
        navigator.clipboard.readText()
            .then(text => {
                setUrl(text);
            })
            .catch(err => {
                console.error('Failed to read clipboard contents: ', err);
            });
    }

    return (
        <div className="d-flex fs-3 border-primary border border-2 rounded p-2 text-secondary align-items-center justify-content-between">
            <input type="text" className="form-control shadow-none w-100 border-0" placeholder="Enter your long URL here" 
                ref={urlInputField}
                onChange={(e)=>setUrl(e.target.value)}
                value={url}
            />
            <FontAwesomeIcon className="cursorPointer" icon={faClipboard} onClick={handleCopyFromClipboard}/>
        </div>
    );
}
export default LinkSelector;