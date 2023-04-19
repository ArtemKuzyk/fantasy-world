import { useContent } from "../../hooks/use-content";
import { LocalStorageService } from "../../services/localStorage";
import './back-button.css'
import '../button/button.css'

export function BackButton(){

    const {message, setMessage} = useContent();

    const handleClick = (e) => {
        console.log(message)
        e.preventDefault();
        const action = message["back-button"];
        setMessage(LocalStorageService.get('scenario')[action])
    }

    return(
        <>
            <button className="back-button action-button"
                    onClick={e => handleClick(e)}>Back to message</button>
        </>
    );
}