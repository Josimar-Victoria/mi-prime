import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from './componentes/Resultado'

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
  };

  consultarApi = () => {
   
    const termino = this.state.termino;
    
    const url = "https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=40";
 
    fetch(url)
      .then((respusta) => respusta.json())
      .then((resultado) => this.setState({ Imagenes: resultado }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado/>
        
        
      </div>
    );
  }
}
export default App;
