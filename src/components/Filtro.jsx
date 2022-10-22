import { useState, useEffect } from "react";

const Filtro = ({filtro, setFiltro}) => {
  return (
    <div className="container p-2 card rounded-3 mt-5 mb-3 text-black shadow ">

    <div className="container input-group p-3 ">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        Filtrar
      </label>
      <select 
        className="form-select text-center" 
        id="inputGroupSelect01"
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        <option value="ahorro">Ahorro</option>
        <option value="comida">Comida</option>
        <option value="casa">Casa</option>
        <option value="gastos">Gastos Varios</option>
        <option value="ocio">Ocio</option>
        <option value="salud">Salud</option>
        <option value="suscripciones">Suscripciones</option>
        <option value="otro">Otro</option>
      </select>
    </div>
    </div>
  );
};

export default Filtro;
