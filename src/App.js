import "./App.css";

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

  const cantidad=()=>{

  }

  return (
    <>
      <label htmlFor="u0">{cambios[0].moneda}</label>
      <input id="u0" type="number" value={cantidad} onChange={modificar} />

      <label htmlFor="u1">{cambios[1].moneda}</label>
      <input id="u1" type="number" value={cantidad} onChange={modificar} />

      <label htmlFor="u2">{cambios[2].moneda}</label>
      <input id="u2" type="number" value={cantidad} onChange={modificar} />

      <label htmlFor="u3">{cambios[3].moneda}</label>
      <input id="u3" type="number" value={cantidad} onChange={modificar} />

      <label htmlFor="u4">{cambios[4].moneda}</label>
      <input id="u4" type="number" value={cantidad} onChange={modificar} />

      <label htmlFor="u5">{cambios[5].moneda}</label>
      <input id="u5" type="number" value={cantidad} onChange={modificar} />
      
    </>
  )
}

export default App;
