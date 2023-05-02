import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { DataLoader, DATA_URL } from './services/dataLoader';
import { LS_KEYS, LocalStorageService } from './services/localStorage';
import { ContentProvider } from './hooks/use-content';
import AppRoutes from './routes/router';
import './App.css';

function App() {

  const [message, setMessage] = useState(LocalStorageService.get(LS_KEYS.SCENARIO)?.[1] || null);  
  
  useEffect(() => {
    DataLoader.set(DATA_URL.PATH)
    .then(() => setMessage(LocalStorageService.get(LS_KEYS.SCENARIO)?.[1]))
  }, [])

  return (
    <ContentProvider value={{ message : message, setMessage : (i) => setMessage(i) }}>
      <div className="App" /*style={{'backgroundImage' : 'url(' + backgroundImageURL + ')'}}*/>
        <HashRouter basename='/'>
          <AppRoutes />
        </HashRouter>
      </div>
    </ContentProvider>
  );
}

export default App;
