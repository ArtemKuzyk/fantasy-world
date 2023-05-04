
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { bagItemDisplayFalse } from '../../../store/bagItemSlice';
import { LocalStorageService, LS_KEYS } from '../../../services/localStorage';
import { BagItem } from '../bagItem';

import './bag.css'

// const items = [1, 2, 3, ]

export function Bag(){

    const dispatch = useDispatch();

    const bagItems = LocalStorageService.get(LS_KEYS.BAG);
    const [bagButtonDisplayNone, setBagButtonDisplayNone] = useState(false);
    const [bagItemContainerDisplayNone, setBagItemContainerDisplayNone] = useState(true);
    const [hoverVal, setHoverVal] = useState('');
    const [visibilityInfoContainer, setVisibilityInfoContainer] = useState(true);

    const handleBagButtonClick = (e) => {
        setBagButtonDisplayNone(!bagButtonDisplayNone);
        setBagItemContainerDisplayNone(!bagItemContainerDisplayNone);
    }

    const handleClickInventarClose = () => {
        setBagButtonDisplayNone(!bagButtonDisplayNone);
        setBagItemContainerDisplayNone(!bagItemContainerDisplayNone);
        dispatch(bagItemDisplayFalse());
    }

    return(
        <>
            <div className={cn('interface_bag-item-info', {'visibility-info-container' : visibilityInfoContainer})}>
                <p>
                    {hoverVal}
                </p>
            </div>
            <div className= {cn('interface_bag-button', {"bagButtonDisplayNone" : bagButtonDisplayNone})} 
                 onClick={(e) => handleBagButtonClick(e)}></div>
            <div className={cn("interface_bag-container", {"bagItemContainerDisplayNone" : bagItemContainerDisplayNone})}>
                <div className='interface_bag-name'>
                    <p>Інвентар</p>
                    <button onClick={() => handleClickInventarClose()}>x</button></div>
                <div className='interface_bag-item-container'>
                    {
                        bagItems
                        ? Object.keys(bagItems).map(el => <BagItem key={`${el}`} data={[bagItems[el], setHoverVal, setVisibilityInfoContainer]} />)
                        : ""
                    }
                </div>
                <div className='interface_bag-money-container'>

                </div>
                <ReactPaginate 
                    className=''
                    nextLabel=">"
                    pageRangeDisplayed={3}
                    previousLabel="<"/>
            </div>
        </>
    );
}   