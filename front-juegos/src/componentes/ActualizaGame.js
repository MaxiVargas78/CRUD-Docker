import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export const ActualizaJuegos = () => {
    const inicialState = {
        Nombre: "",
        Categoria: "",
        Lanzamiento: "",
        Reseña: "",
      };
      let { id } = useParams();
    const [juegoActual, setJuegoActual] = useState(inicialState);
    const [enviado, setEnviado] = useState(false);
    const countRef = useRef(0);

    useEffect(() => {
        recuperarJuego();
      }, [countRef]);

    const handleMenuChange = (e) => {
        const { name, value } = e.target;
        setJuegoActual({ ...juegoActual, [name]: value });
    };
    const recuperarJuego = () => {
        const config = {
            credentials: 'include',
            headers: 
            {
                'Content-Type': 'application/json'
            }
        };
        axios
            .get(`http://127.0.0.1:8000/api/Juego/${id}/`, config)
            .then((response) => {
                setJuegoActual({
                id: response.data.id,
                Nombre: response.data.Nombre,
                Categoria: response.data.Categoria,
                Lanzamiento: response.data.Lanzamiento,
                Reseña: response.data.Reseña,
                });
                console.log(juegoActual);
            })
            .catch((e) => {
                console.error(e);
            });
        };
    const actualizaJuego = () => {
        const config = {
            credentials: 'include',
            headers: 
            {
                'Content-Type': 'application/json'
            }
        };
        let data = {
          Nombre: juegoActual.Nombre,
          Categoria: juegoActual.Categoria,
          Lanzamiento: juegoActual.Lanzamiento,
          Reseña: juegoActual.Reseña,
        };
        axios
            .put(`http://127.0.0.1:8000/api/Juego/${id}/`,data, config)
            .then((response) => {
                setJuegoActual({
                Nombre: response.data.Nombre,
                Categoria: response.data.Categoria,
                Lanzamiento: response.data.Lanzamiento,
                Reseña: response.data.Reseña,

                });
                setEnviado(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    
    return (
        <div className="submit-form">
        {enviado? (
          <div>
            <div className="alert alert-success alert-dismissible fade show mb-5" role="alert" >
              ¡Reseña actualizada!
            </div>

          </div>
        ) : (
          <div>
            <div className="form-group  text-white mb-3 ">
              <label htmlFor="Nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="Nombre"
                required
                value={juegoActual.Nombre}
                onChange={handleMenuChange}
                name="Nombre"
              />
            </div>
            <div className="form-group  text-white mb-3 ">
              <label htmlFor="Categoria">Categoría</label>
              <input
                type="text"
                className="form-control"
                id="Categoria"
                required
                value={juegoActual.Categoria}
                onChange={handleMenuChange}
                name="Categoria"
                default
              />
            </div>
            <div className="form-group  text-white mb-3">
              <label htmlFor="Lanzamiento">Lanzamiento</label>
              <input
                type="text"
                className="form-control"
                id="Lanzamiento"
                required
                value={juegoActual.Lanzamiento}
                onChange={handleMenuChange}
                name="Lanzamiento"
              />
            </div>
            <div className="form-group  text-white mb-3 ">
              <label htmlFor="Reseña">Reseña nueva...</label>
              <input
                type="text"
                className="form-control"
                id="Reseña"
                required
                value={juegoActual.Reseña}
                onChange={handleMenuChange}
                name="Reseña"
              />
            </div>
            <button onClick={actualizaJuego} className="btn btn-success mb-5">
              Subir actualización
            </button>
          </div>
        )}
      </div>
      );
    };