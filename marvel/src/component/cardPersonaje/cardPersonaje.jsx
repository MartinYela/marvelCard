import './style.css';

export default function CardPersonaje(props) {

    return(
        <div className='card'>
            <img className='imagenCardPersonaje' src={`${props.personaje.thumbnail.path}.${props.personaje.thumbnail.extension}`} alt={`imagen de ${props.personaje.name}`} />
            <p>{props.personaje.title}</p>
            <p>{props.personaje.creators?.items?.name}</p>
        </div>
    )
}