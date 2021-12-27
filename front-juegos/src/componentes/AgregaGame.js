import axios from "axios";
import { useState } from "react";

export const AgregaJuegos = () => {
  const iniciojuegoState = {
    id: null,
    Nombre: "",
    Categoria: "",
    Lanzamiento: "",
    Reseña: "",
  };
  const [juego, setJuego] = useState(iniciojuegoState);
  const [subida, setSubida] = useState(false);
  const handleMenuChange = (e) => {
    const { name, value } = e.target;
    setJuego({ ...juego, [name]: value });
    console.log(name)
  };
  const subirJuego = () => {

    const data = {
      Nombre: juego.Nombre,
      Categoria: juego.Categoria,
      Lanzamiento: juego.Lanzamiento,
      Reseña: juego.Reseña,
    };
  const config = {
        credentials: 'include',
        headers: 
        {
        'Content-Type': 'application/json'
        }
    };
    axios
        .post(`http://127.0.0.1:52893/api/Juego/`,data, config)
        .then((response) => {
            setJuego({
                Nombre: response.data.Nombre,
                Categoria: response.data.Categoria,
                Lanzamiento: response.data.Lanzamiento,
                Reseña: response.data.Reseña,

            });
            setSubida(true);
            console.log(response.data);
        })
        .catch((e) => {
            console.error(e);
        });
  };
  const nuevoJuego = () => {
    setJuego(iniciojuegoState);
    setSubida(false);
  };
return (
    <div className= 'container'>
    <div className="submit-form">
          {subida ? (
            <div>
              <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
                ¡Reseña agregada!
              </div>
              <button className="btn btn-success mb-3" onClick={nuevoJuego}>
                Agregar otra reseña
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group text-white mb-3 ">
                <label htmlFor="Nombre">Nombre del juego</label>
                <input
                  type="text"
                  className="form-control"
                  id="Nombre"
                  value={juego.Nombre}
                  onChange={handleMenuChange}
                  name="Nombre"
                />
              </div>
              <div className="form-group text-white mb-3">
                <label htmlFor="Categoria">Categoría (ej. 'Aventura')</label>
                <input
                  type="text"
                  className="form-control"
                  id="Categoria"
                  value={juego.Categoria}
                  onChange={handleMenuChange}
                  name="Categoria"
                />
              </div>
              <div className="form-group text-white mb-3">
                <label htmlFor="Lanzamiento">Fecha Lanzamiento (formato DD/MM/AA)</label>
                <input
                  type="text"
                  className="form-control"
                  id="Lanzamiento"
                  value={juego.Lanzamiento}
                  onChange={handleMenuChange}
                  name="Lanzamiento"
                />
              </div>
              <div className="form-group text-white mb-3">
                <label htmlFor="Reseña">Escribe aquí una reseña sobre el juego...</label>
                <input
                  type="text"
                  className="form-control"
                  id="Reseña"
                  value={juego.Reseña}
                  onChange={handleMenuChange}
                  name="Reseña"
                />
              </div>
              <button onClick={subirJuego} className="btn btn-success mb-5">
                Agregar Reseña
              </button>
            </div>
          )}
        </div>
    </div>
        
  );
};