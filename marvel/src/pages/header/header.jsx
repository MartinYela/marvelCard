import './style.css';
import logoMarvel from '../../imagenes/LogoMarvelHeader.jpg'

export default function Header() {
    return(
        <header>
            <img src={logoMarvel} alt="logo de marvel" />
        </header>
    )
}