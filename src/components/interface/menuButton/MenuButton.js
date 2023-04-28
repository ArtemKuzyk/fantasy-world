import { createElement, useState } from 'react';
import cn from 'classnames';
import { MenuItem } from '../menuItem';
import './menu-button.css'
import { LS_KEYS, LocalStorageService } from '../../../services/localStorage';

const saveGameProgress = () => {
    const name = 'Fantasy-game-save';
    let scenarioText = JSON.stringify(LocalStorageService.get(LS_KEYS.SCENARIO));
    let bagText = JSON.stringify(LocalStorageService.get(LS_KEYS.BAG));
    let blob = new Blob([scenarioText, bagText], {type : 'application/json'});
    let link = createElement(
        'a',
        {
            'href' : URL.createObjectURL(blob),
            'download' : name
        },
        'Save progress'
    );
    return link;
}

const MENU_ITEMS = [
    {name : 'Save progress', onClickAction : () => {let val = saveGameProgress(); console.log(val); return val;}}, 
    {name : 'Restart', onClickAction : () => {}},
    {name : 'Show personal charackteristics', onClickAction : () => {}},
    {name : 'Settings', onClickAction : () => {}},
    {name : 'Quit', onClickAction : () => {}}
];

export function MenuButton(){

    const [display, setDisplay] = useState(true);

    const handleMenuButtonClick = (e) => {
        setDisplay(!display)
    }

    return(
        <>
            <div className='interface_menu-button' onClick={(e) => handleMenuButtonClick(e)}>
            
            </div>
            <div className={cn('interface_menu-container', {'interface_menu-container__display-none' : display})}>
                {MENU_ITEMS.map(el => <MenuItem data={el} key={el.name} />)}
            </div>
        </>
    );
}