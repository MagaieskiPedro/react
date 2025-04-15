import {Routes, Route} from 'react-router-dom';
import { Inicial } from '../Paginas/Inicial'
import { Serie } from '../Paginas/Serie'
import { Perfil } from '../Paginas/Perfil'
import { Lista } from '../componentes/Lista';

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='serie' element={<Serie/>}/>
            </Route>
        </Routes>
    )
}