import { LS_KEYS, LocalStorageService } from '../../services/localStorage';

import './button.css';

export function Button(props) {
    const actionText = props.actionsText;
    // console.log(props)

    // const handleClick = () => {
    //     props.setMessage(LocalStorageService.get('scenario')[props.actions]);
    //     LocalStorageService.set(LS_KEYS.CURRENT_ACTION, props.actions);
    // }

    return(
        <>
            <button className='action-button'
            onClick={() => {props.setMessage(LocalStorageService.get('scenario')[props.actions])}} >
            {/* // onClick={() => {handleClick()}} > */}
                {actionText}
            </button>
        </>
    )
    
}