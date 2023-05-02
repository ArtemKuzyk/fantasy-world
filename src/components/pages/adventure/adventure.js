import { useState, useEffect } from 'react';
import { ImageMap } from '@qiuz/react-image-map';
import { LocalStorageService, LS_KEYS } from '../../../services/localStorage';
import { useContent } from '../../../hooks/use-content'
import { Message } from '../../message';
import { BackButton } from '../../backButton';
import { MenuButton } from '../../interface/menuButton';
import { Bag } from '../../interface/bag';
import { BagItemInfo } from '../../interface/bagItemInfo';


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
        console.log(data)
        console.log(index)
        setMessage(LocalStorageService.get('scenario')[`${data.action}`])
        const foundObject = LocalStorageService.get('scenario')[`${data.action}`].obj;
        const ls_key_name = foundObject["obj-store-name"];
        if(LocalStorageService.get(LS_KEYS.BAG)){
          let bagItems = LocalStorageService.get(LS_KEYS.BAG);
          bagItems[ls_key_name] = foundObject;
          LocalStorageService.set(LS_KEYS.BAG, bagItems);
          // LocalStorageService.remove(action);
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
                        <BackButton />
                        {
                        mapArea 
                        ?<ImageMap className="usage-map" 
                                src={backgroundImageURL} 
                                map={mapArea} 
                                // onMapClik={(area) => {setMessage(LocalStorageService.get('scenario')[`${area.action}`])
                                // onMapClick(area);
                                // }} 
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