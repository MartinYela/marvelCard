import { useEffect, useState} from 'react';
import './style.css';
import CardPersonaje from '../../component/cardPersonaje/cardPersonaje.jsx'
// import {apiKey} from "../../apiKey.js";
import {apiKey2} from "../../apiKey.js";


// clave mia : hash=70e082a31e261db4a8dbe3956d357738
// clave mia2: hash=45572a0b9cdff12f96f89070bfdbacb9


export default function Landing(){

    const [listPersonajes, setListPersonajes] = useState([]);

    async function getCharacters(){
        // http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
        const r = await fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey='+ apiKey2+'&hash=45572a0b9cdff12f96f89070bfdbacb9');
        const d = await r.json();
        return d.data?.results;
    }

    useEffect(() => {
        getCharacters().then(list => setListPersonajes(list))
    }, []);
    

    return(
        <div className='container_cardPersonaje'>
            {listPersonajes?.map(personaje => <CardPersonaje personaje={personaje} key={personaje.id}></CardPersonaje>)}
        </div>
    )
}