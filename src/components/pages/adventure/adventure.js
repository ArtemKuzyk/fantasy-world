import { useState, useEffect } from 'react';
import { ImageMap } from '@qiuz/react-image-map';
import { LocalStorageService, LS_KEYS } from '../../../services/localStorage';
import { useContent } from '../../../hooks/use-content'
import { Message } from '../../message';
import { MenuButton } from '../../interface/menuButton';
import { Bag } from '../../interface/bag';
import { BagItemInfo } from '../../interface/bagItemInfo';
import { Button } from '../../button';


export function Adventure(){

    const {message, setMessage} = useContent();
    const [backgroundImageURL, setBackgroundImageURL] = useState('');
    const [mapArea, setMapArea] = useState({});

    useEffect(() => {
        if(message){
          setBackgroundImageURL(message["background-image"]);
          setMapArea(message["area"]);
        }
      }, [message])

    const onMapClick = (data, index) => {
        // console.log(data)
        // console.log(index)
        setMessage(LocalStorageService.get('scenario')[`${data.action}`])
        const foundObject = LocalStorageService.get('scenario')[`${data.action}`].obj;
        const ls_key_name = foundObject["obj-store-name"];
        if(LocalStorageService.get(LS_KEYS.BAG)){
          let bagItems = LocalStorageService.get(LS_KEYS.BAG);
          bagItems[ls_key_name] = foundObject;
          LocalStorageService.set(LS_KEYS.BAG, bagItems);
        } else {
          LocalStorageService.set(LS_KEYS.BAG, {[ls_key_name] : foundObject});
        } 
        let scenario = LocalStorageService.get('scenario');
        delete scenario[`${data.action}`];
    
        scenario[`${data.parent}`].area.splice(index, 1);
        LocalStorageService.set(LS_KEYS.SCENARIO, scenario);
      }

    return(
        <>
            {
                message
                ?<>
                {
                    message.text !==  "no-text"
                    ? <Message />
                    : '' 
                }
                {
                    message["back-button"]
                    ? (<>
                        <Button 
                          backButtonStyles={message["back-button"]['styles']} 
                          actionsText={'Повернутись'} 
                          actions={message["back-button"]["action"]}
                        />
                        {
                        mapArea 
                        ?<ImageMap className="usage-map" 
                                src={backgroundImageURL} 
                                map={mapArea} 
                                onMapClick={onMapClick}
                                />
                        : ""
                        }
                        
                    </>)
                    : <img className='backgroundImage' 
                        src={backgroundImageURL} 
                        alt='please reload your page'/>
                }
                <Bag />
                <MenuButton />
                <BagItemInfo />
                </>
                : ""
            }
        </>
    );
}