import { Cabecalho } from "../componentes/Cabecalho";
import { BarraNavegacao } from "../componentes/Barranavegacao";
import { Conteudo } from "../componentes/Conteudo";
import { Rodape } from "../componentes/Rodape";
//estrutura
export function Inicial(){
    return(
        <>
            <Cabecalho></Cabecalho>
            <BarraNavegacao></BarraNavegacao>
            <Conteudo></Conteudo>
            <Rodape></Rodape>
        </>
    )
}