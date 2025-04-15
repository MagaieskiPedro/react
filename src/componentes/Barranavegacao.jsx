import estilos from "./barranavegacao.module.css"
import { Link } from "react-router-dom"
export function BarraNavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
            <Link to="/">
                <li><span class="material-symbols-rounded">Home</span>Home</li>
            </Link>
            <Link to="/serie">
                <li><span class="material-symbols-rounded">Movie</span>Serie</li>
            </Link>
            <Link to="/perfil">
                <li><span class="material-symbols-rounded">Person</span>Perfil</li>
            </Link>  
            </ul>
        </nav>
    )
}