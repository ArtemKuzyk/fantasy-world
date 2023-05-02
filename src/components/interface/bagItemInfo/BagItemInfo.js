
import { useDispatch, useSelector } from 'react-redux';
import { bagItemDisplayFalse } from '../../../store/bagItemSlice'
import './bag-item-info.css'

export function BagItemInfo(){

    const dispatch = useDispatch();
    const bagItemInfoDisplay = useSelector(state => state.bagItemDisplay.bagItemDisplay);
    const bagItemText = useSelector(state => state.bagItemDisplay.text)
    const actionId = useSelector(state => state.bagItemDisplay.actionId);
    const playAreaActionId = useSelector(state => state.bagItemDisplay.actionId);
    
    return(
        <>
            {
                bagItemInfoDisplay
                ?<div className='interface_bag_bag-item-info'>
                    {/* <img /> */}
                    <button className='close' onClick={() => dispatch(bagItemDisplayFalse())}>x</button>
                    <p>{bagItemText}</p>
                    <button className='action'>
                        Використати
                    </button>
                </div>
                : ''
            }
        </>
    );
}