//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Layout from './layout/Layouts';
import { ListaJuegos } from "./componentes/ListaGame";
import { ActualizaJuegos } from "./componentes/ActualizaGame";
import { AgregaJuegos } from "./componentes/AgregaGame";

function App() {
  return (
    <div className="bg-dark">
      <Layout> </Layout>
      <div className="container bg-dark">
        <Switch>
          <Route exact path={["/", "/juegos"]} component={ListaJuegos} />
          <Route exact path="/agregar/" component={AgregaJuegos} />
          <Route path="/Juego/:id/actualizar/" component={ActualizaJuegos} />
        </Switch>
      </div>
    </div>
); 
}

export default App;