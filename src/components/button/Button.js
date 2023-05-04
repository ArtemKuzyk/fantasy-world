import { LS_KEYS, LocalStorageService } from '../../services/localStorage';
import cn from 'classnames';
import { useContent } from '../../hooks/use-content';

import './button.css';

export function Button(props) {

    const {setMessage} = useContent();

    const actionText = props.actionsText;
    const onClickAction = props.onClickAction;
    // console.log(props)

    const handleClick = () => {
        if(onClickAction){
            console.log(onClickAction)
            onClickAction();
        } else {
            setMessage(LocalStorageService.get('scenario')[props.actions]);
        }
    }

    const backButtonStyles = props.backButtonStyles || false;
    const innerLinkStyles = props.innerLinkStyles || false;

    return(
        <>
            <button className={cn('action-button', {'back-button' : backButtonStyles}, {'inner-link' : innerLinkStyles})}
                    onClick={() => handleClick()} >
                {actionText}
            </button>
        </>
    )
    
}