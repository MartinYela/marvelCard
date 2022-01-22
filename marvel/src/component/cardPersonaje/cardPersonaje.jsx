import './style.css';

export default function CardPersonaje({ personaje }) {

    const description = personaje.description === '' ? 'no description in the API' : personaje.description;

    return (
        <div className='card_container'>
            <div className='card'>
                <div className='card_front'>
                    <img className='imagenCardPersonaje' src={`${personaje.thumbnail.path}/portrait_fantastic.${personaje.thumbnail.extension}`} alt={`imagen de ${personaje.name}`} />
                    <p>{personaje.name}</p>
                </div>
                <div className='card_back'>
                    <h1>{personaje.name}</h1>
                    <ul>
                        <li><strong>Description:</strong> {description}</li>
                    </ul>
                </div>

                {/* <p>{personaje.creators?.items?.name}</p> */}
            </div>
        </div>

    )
}