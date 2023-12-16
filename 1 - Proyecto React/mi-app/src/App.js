//Elementos de importación
import React from 'react';
//Funcinon App - En donde vamos a compilar todos los componentes de nuestro sitio
//Componente código Jsx
function App(props) {
  //React es un hook de react, permite usar recursos de react en nuestros componentes
  let [contador, setearConteo] = React.useState(0);

  function aumentarConteo(){
    setearConteo(contador + 1);
  }

  return (
    <div style={{backgroundColor: props.colorFondo}}>
      <h1 style={{color: props.colorTexto}}>Contador: {contador}</h1>
      <button onClick={aumentarConteo}>Incrementar</button>
    </div>
  );
}



//Donde se renderiza App con la información que posee
export default App;
