import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames'
import './start-message.css'

export function StartMessage() {

    const [display, setDisplay] = useState(true);

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
                <form action='' className={cn('start-menu_load-form', {'display' : display})}>
                    <label>
                        <input type='text' placeholder='Write your progress code'></input>
                    </label>
                    <button type='submit'>
                        Load
                    </button>
                </form>
            </div>

        </>
    );
}