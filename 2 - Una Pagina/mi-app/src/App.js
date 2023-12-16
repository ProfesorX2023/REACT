import React from "react";
import Saludo from './Saludo';
import Mensaje from './Mensaje'


function App(){
  return (
    <div>
      <Saludo nombre="Juan"/>
      <Mensaje mensaje = "Bienvenido a mi Aplicación React" />
      <Saludo nombre="Luis"/>

    </div>
  )
}

export default App;

