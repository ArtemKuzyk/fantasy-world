import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { LocalStorageService } from '../../../services/localStorage';
import './start-message.css';
import { useEffect } from 'react';

export function StartMessage() {

    const [display, setDisplay] = useState(true);
    const [savedFile, setSavedFile] = useState();

    const loadGame = (e) => {
        e.preventDefault()
        console.log(savedFile.type)
        if(savedFile){
            LocalStorageService.clear();
            if(typeof savedFile === 'object'){

            }
        } else {
            alert('Файл збереження не знайдено :(')
        }
        
    }

    useEffect(() => {
        console.log(savedFile);
    }, [savedFile])

    return(
        <>
            <div className='start-menu_container'>
                <button className='start-menu_button'>
                    <Link to='/the-adventure' className='no-decoration'>
                        Start game
                    </Link>
                </button>
                <button className={cn('start-menu_button')} onClick={() => setDisplay(!display)}>
                    Load game
                </button>
                <form className={cn('start-menu_load-form', {'display' : display})}>
                    <label htmlFor='load-saved-file'> Choose file
                        <input name='load-saved-file' 
                               id='load-saved-file' 
                               type='file' 
                               placeholder='Write your progress code'
                               onChange={e => console.log(e) /*setSavedFile(e.target.files)*/}></input>
                    </label>
                    <button onClick={(e) => loadGame(e)}>
                        Load
                    </button>
                </form>
            </div>

        </>
    );
}