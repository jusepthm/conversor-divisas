import "./App.css";
import {useState} from 'react';

const App = () => {
  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    }, {
      moneda: "Peso argentino",
      cambio: 201.73,
    }, {
      moneda: "Peso colombiano",
      cambio: 4957.39,
    }, {
      moneda: "Peso mexicano",
      cambio: 20.41,
    }, {
      moneda: "Dólar",
      cambio: 1.09
    }
  ]

  const [cantidad, setCantidad]= useState(0);

  const [resultado1, setResulatdo1]= useState(0);
  const [resultado2, setResulatdo2]= useState(0);
  const [resultado3, setResulatdo3]= useState(0);
  const [resultado4, setResulatdo4]= useState(0);

  const modificar=(e)=>{
    setCantidad(e.target.value);
    setResulatdo1(e.target.value*cambios[1].cambio);
    setResulatdo2(e.target.value*cambios[2].cambio);
    setResulatdo3(e.target.value*cambios[3].cambio);
    setResulatdo4(e.target.value*cambios[4].cambio);
  }


  return (
    <>
      <label htmlFor="u0">{cambios[0].moneda}</label>
      <input id="u0" type="number" value={cantidad} onChange={modificar} />

      <label htmlFor="u1">{cambios[1].moneda}</label>
      <input id="u1" type="number" value={resultado1} onChange={modificar} readOnly/>

      <label htmlFor="u2">{cambios[2].moneda}</label>
      <input id="u2" type="number" value={resultado2} onChange={modificar} readOnly />

      <label htmlFor="u3">{cambios[3].moneda}</label>
      <input id="u3" type="number" value={resultado3} onChange={modificar} readOnly/>

      <label htmlFor="u4">{cambios[4].moneda}</label>
      <input id="u4" type="number" value={resultado4} onChange={modificar} readOnly/>

      
    </>
  )
}

export default App;
