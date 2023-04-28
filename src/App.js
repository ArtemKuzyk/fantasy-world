import { useEffect, useState } from 'react';
// import { ImageMap } from '@qiuz/react-image-map';
import { ContentProvider } from './hooks/use-content';
import { DataLoader, DATA_URL } from './services/dataLoader';
import { LS_KEYS, LocalStorageService } from './services/localStorage';
// import { Message } from './components/message';
// import { BackButton } from './components/backButton';
// import { Bag } from './components/interface/bag';
import './App.css';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/router';

function App() {

  // const [data, setData] = useState(DataLoader.set(DATA_URL.PATH));
  const [message, setMessage] = useState(LocalStorageService.get(LS_KEYS.SCENARIO)?.[1] || null);
  // const [backgroundImageURL, setBackgroundImageURL] = useState('');
  // const [mapArea, setMapArea] = useState({});
  
  
  useEffect(() => {
    DataLoader.set(DATA_URL.PATH)
    .then(() => setMessage(LocalStorageService.get(LS_KEYS.SCENARIO)?.[1]))
  }, [])

  // useEffect(() => {
  //   if(message){
  //     setBackgroundImageURL(message["background-image"]);
  //     setMapArea(message["area"]);
  //   }
  // }, [message])

  // const onMapClick = (data, index) => {
  //   console.log(data)
  //   console.log(index)
  //   setMessage(LocalStorageService.get('scenario')[`${data.action}`])
  //   const foundObject = LocalStorageService.get('scenario')[`${data.action}`].obj;
  //   const ls_key_name = foundObject["obj-store-name"];
  //   if(LocalStorageService.get(LS_KEYS.BAG)){
  //     let bagItems = LocalStorageService.get(LS_KEYS.BAG);
  //     bagItems[ls_key_name] = foundObject;
  //     LocalStorageService.set(LS_KEYS.BAG, bagItems);
  //     // LocalStorageService.remove(action);
  //   } else {
  //     LocalStorageService.set(LS_KEYS.BAG, {[ls_key_name] : foundObject});
  //   } 
  //   let scenario = LocalStorageService.get('scenario');
  //   delete scenario[`${data.action}`];

  //   scenario[`${data.parent}`].area.splice(index, 1);
  //   LocalStorageService.set(LS_KEYS.SCENARIO, scenario);
  // }



  return (
    <ContentProvider value={{ message : message, setMessage : (i) => setMessage(i) }}>
      <div className="App" /*style={{'backgroundImage' : 'url(' + backgroundImageURL + ')'}}*/>
        <HashRouter basename='/'>
          <AppRoutes />
        {/* {
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
          </>
        : ""
        } */}
        </HashRouter>
      </div>
    </ContentProvider>
  );
}

export default App;
