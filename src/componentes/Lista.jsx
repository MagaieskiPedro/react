//axios permite a comunicação com as paginas http (https)
import axios from 'axios'
//as ferramentas começadas com use são hooks de manuseio da biblioteca React
import React, {useState, useEffect} from "react";
import { Card } from './Card';
import estilos from './Lista.module.css';
import { Modal } from "./Modal";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Lista(){
    //crio uma variavel chamada movie, e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]);
    //mostra se foi selecionado um filme para visualização
    const [SelectedMovie, setSelectedMovie] = useState(null)
    
    //Efect trabalha com uma estruta especifica parametros (), script {}, e dependencias []

    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            //se deu certo a comunicação, então grava o resultado no "response" que pode pegar elemento através do data
            .then(response =>{
                console.log(response.data.results);
                setMovie(response.data.results)
            })
            //se der ruim, exibe no inspecionar o erro de comunicação
            .catch(error =>{
                console.log('Error', error);
            });
    },[]);
    const handleOpenModal=(movie)=>{
        setSelectedMovie(movie);
    };
    const handleCloseModal=()=>{
        setSelectedMovie(null);
    };  
    return(
        <div className={estilos.container}>
            <figure style ={{display:'flex', flexWrap:'wrap'}}>
                {movies.map(movie=>(
                    <Card key={movie.id}
                    movie={movie}
                    onOpenModal={handleOpenModal}
                    />
                ))}
            </figure>
            {setSelectedMovie && (<Modal movie={SelectedMovie} 
            onClose={handleCloseModal}/>)}
        </div>
    );
}