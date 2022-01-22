import { useState } from 'react';
import './style.css';

export default function Search({search}) {

    const [text,setText] = useState('');
    const onSearch = (q) => {
        setText(q);
        search(q)
    }

    return ( 
         <section className='cardSection'>
             <form >
                <input type="text"
                className='form-control'
                placeholder='Buscar personaje'
                autoFocus
                onChange={(word) => onSearch(word.target.value)}
                value={text} />
             </form>
         </section>
    )
}