import { useEffect, useState } from 'react';
import './style.css';
import CardPersonaje from '../../component/cardPersonaje/cardPersonaje.jsx'
// import {apiKey} from "../../apiKey.js";
import { apiKey2 } from "../../apiKey.js";
import Search from '../../component/search/search';
import { Fragment } from 'react/cjs/react.production.min';


// clave mia : hash=70e082a31e261db4a8dbe3956d357738
// clave mia2: hash=45572a0b9cdff12f96f89070bfdbacb9


export default function Landing() {

    const [listPersonajes, setListPersonajes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    async function getCharacters(query) {
        // http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
        let r = '';
        if (query===''){
            r = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=' + apiKey2 + '&hash=45572a0b9cdff12f96f89070bfdbacb9');
        }else {
            r = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apiKey2}&hash=45572a0b9cdff12f96f89070bfdbacb9`);
        }
        
        const d = await r.json();
        return d.data?.results;
    }

    useEffect(() => {
        getCharacters(query).then(list => {
            setListPersonajes(list);
            setLoading(false)
        })
    }, [query]);


    return (
        <Fragment>
            <Search search={(q)=> setQuery(q)}></Search>
            <div className='container_cardPersonaje'>
                {isLoading ? <h1>Cargando...</h1> : listPersonajes?.map(personaje => <CardPersonaje personaje={personaje} key={personaje.id}></CardPersonaje>)}
            </div>
        </Fragment>
    )
}