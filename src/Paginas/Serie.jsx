import estilo from './Serie.module.css'
import { Series } from '../componentes/Series'
export function Serie() {
    return (
        <div className={estilo.container}>
            <Series/>
        </div>
    ); 
}