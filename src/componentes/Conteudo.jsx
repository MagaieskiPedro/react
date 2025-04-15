import estilos from "./conteudo.module.css"
import {Lista} from "./Lista"
import { Series } from "./Series"
export function Conteudo(){
    return(
        <main className={estilos.container}>
            <Series/>
        </main>
    )
}