import estilos from "./barranavegacao.module.css"
export function BarraNavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                
                <li><span class="material-symbols-outlined">Home</span>Home</li>
                <li><span class="material-symbols-outlined">Movie</span>Filmes</li>
                <li><span class="material-symbols-outlined">Person</span>Perfil</li>
            </ul>
        </nav>
    )
}