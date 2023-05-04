import { createElement, useState } from 'react';
import cn from 'classnames';
import './menu-button.css'
import { LS_KEYS, LocalStorageService } from '../../../services/localStorage';
import { Button } from '../../button';

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

const restartGame = () => {
    console.log('restart()')
    LocalStorageService.clear();
    window.location.reload();
}


const MENU_ITEMS = [
    {name : 'Save progress', onClickAction : () => saveGameProgress()}, 
    {name : 'Restart', onClickAction : () => restartGame()},
    {name : 'Show personal charackteristics', onClickAction : () => {}},
    {name : 'Settings', onClickAction : () => {}},
    {name : 'Quit', onClickAction : () => {window.open('http://localhost:3000/', '_self')}}
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
                {MENU_ITEMS.map(el => {
                    let actionText;
                    let innerLinkStyles
                    el.name === 'Save progress'
                    ?<>
                        {actionText = el.onClickAction()} 
                        {innerLinkStyles = true}
                    </>
                    : actionText = el.name
                    return(
                        <Button 
                            key={el.name} 
                            innerLinkStyles={innerLinkStyles}
                            actionsText={actionText} 
                            onClickAction={el.onClickAction} 
                        />)}
                    )
                }
            </div>
        </>
    );
}