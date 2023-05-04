import { useContent } from '../../hooks/use-content';
import { Button } from '../button';
import './message.css';     

export function Message(){

    const {message, setMessage} = useContent();

    return(
        <>
            <div className="message">
                {
                    message
                    ? <>
                        <p>{message.text}</p>
                        {
                            message["message-image"]
                            ? <img src={message["message-image"]} alt="oops something went wrong :(" />
                            : ""
                        }
                        <div className='message_button-container'>
                            {Object.keys(message.action).map(el => <Button key={el} actions={el} actionsText={message.action[el]}/>)}
                        </div>
                      </>
                    : ''
                }
            </div>
        </>
    );
}