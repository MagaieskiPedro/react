import axios from "axios";
//as ferramentas começadas com use são hooks de manuseio da biblioteca React
import React, {useState, useEffect} from "react";
import { Card } from './SeriesCard';
import estilos from './Series.module.css';
import { Modal } from "./SeriesModal";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Series(){
    const [series,setSerie] = useState([])
    const [selectedSerie,setSelectedSerie] = useState(null)
    
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
                .then(response =>{
                    console.log(response.data.results);
                    setSerie(response.data.results)
                })
                .catch(error =>{
                    console.log('Error', error);
                });
    },[]);
    const handleOpenModal=(serie)=>{
        setSelectedSerie(serie);
    };
    const handleCloseModal=()=>{
        setSelectedSerie(null);
    };  
    return(
        <div className={estilos.container}>
            <figure style={{display:'flex', flexWrap:'wrap'}}>
                {series.map(serie =>(
                    <Card key={serie.id}
                    movie = {serie}
                    onOpenModal={handleOpenModal}
                    />
                ))}
            </figure>
            {setSelectedSerie && (<Modal serie={selectedSerie} 
            onClose={handleCloseModal}/>)}
        </div>
    );
}