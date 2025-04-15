import estilos from './SeriesModal.module.css';
//estrutura basica
export function Modal({ serie, onClose}){
    //Se clicar e não houver filme, retorna nulo
    if(!serie){
        return null;
    }
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{serie.name}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div className={estilos.imgDetails}>
                    <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.overview}/>
                    <ul className={estilos.serieDetails}>
                        <li>{`Popularidade: ${serie.popularity ?? 'Não disponível no momento, aguarde'}`}</li>
                        <li>{`Data de lançamento: ${serie.release_date}`}</li>
                        <li>{`Quantidade de votos: ${serie.vote_count}`}</li>
                        <li>{`Sinopse: ${serie.overview}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}