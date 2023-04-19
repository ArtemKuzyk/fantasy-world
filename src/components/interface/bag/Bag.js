
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import cn from 'classnames';
import { LocalStorageService, LS_KEYS } from '../../../services/localStorage'
import { BagItem } from '../bagItem'

import './bag.css'

// const items = [1, 2, 3, ]

export function Bag(){


    const bagItems = LocalStorageService.get(LS_KEYS.BAG);
    // console.log(bagItems)
    const [bagButtonDisplayNone, setBagButtonDisplayNone] = useState(false);
    const [bagItemContainerDisplayNone, setBagItemContainerDisplayNone] = useState(true);

    const handleBagButtonClick = (e) => {
        // console.log(e.target)
        setBagButtonDisplayNone(!bagButtonDisplayNone);
        setBagItemContainerDisplayNone(!bagItemContainerDisplayNone);
    }

    const handleClickInventarClose = () => {
        setBagButtonDisplayNone(!bagButtonDisplayNone);
        setBagItemContainerDisplayNone(!bagItemContainerDisplayNone);
    }

    return(
        <>
            <div className= {cn('interface_bag-button', {"bagButtonDisplayNone" : bagButtonDisplayNone})} 
                 onClick={(e) => handleBagButtonClick(e)}></div>
            <div className={cn("interface_bag-container", {"bagItemContainerDisplayNone" : bagItemContainerDisplayNone})}>
                <div className='interface_bag-name'>
                    <p>Інвентар</p>
                    <button onClick={() => handleClickInventarClose()}>x</button></div>
                <div className='interface_bag-item-container'>
                    {
                        bagItems
                        ? Object.keys(bagItems).map(el => <BagItem key={`${el}`} data={bagItems[el]} />)
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