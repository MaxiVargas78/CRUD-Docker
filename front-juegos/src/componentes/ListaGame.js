import React from "react";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

export const ListaJuegos = () => {
  const [juegos, setJuegos] = useState([]);
  const history = useHistory();
  const countRef = useRef(0);
  const [eliminado, setElimina] = useState(false); // deleted -> eliminado
  useEffect(() => { recuperaAllLista();}, [countRef]);

  const recuperaAllLista = () => { 
    const config = {
        credentials: 'include',
        headers: 
        {
        'Content-Type': 'application/json'
        }
    };
    axios 
        .get(`http://127.0.0.1:52893/api/Juego/`, config)
        .then((response) => { setJuegos(response.data);})
        .catch((e) => { console.error(e);});
  };

  const EliminaJuego = (id) => {
    const config = {
        credentials: 'include',
        headers: 
        {
        'Content-Type': 'application/json'
        }
    };
    axios
        .delete(`http://127.0.0.1:52893/api/Juego/${id}/`, config)
        .then((response) => { setElimina(true); recuperaAllLista();})
        .catch((e) => { console.error(e);});
  };
  const handleUpdateClick = (id) => { history.push(`/Juego/${id}/actualizar/`);};


return (
    <div className="row justify-content-center">
        <div className="col">
        {eliminado && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert" >
            Reseña del juego eliminado.
            </div>
        )}
        {juegos &&
            juegos.map((juegos) => (

            <div class="card mb-3">
                <div class="card-header">
                  Reseña sobre...
                </div>
                <div class="card-body">
                  <h5 class="card-title">{juegos.Nombre}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{juegos.Categoria}</h6>
                  <h6 class="card-subtitle mb-2 text-muted">{juegos.Lanzamiento}</h6>
                  <p class="card-text">{juegos.Reseña}</p>

                  <div className="btn-group justify-content-around w-75 mb-1 " data-toggle="buttons">
                    <span>
                    <button className="btn btn-primary" onClick={() => handleUpdateClick(juegos.id)} >
                        Actualizar
                    </button>
                    </span>
                    <span>
                    <button className="btn btn-danger" onClick={() => EliminaJuego(juegos.id)}>
                        Eliminar
                    </button>
                    </span>
                </div> 
                </div>
                </div>
            ))}
        </div>
    </div>   
  );
};