import React from "react";

import { useState, useEffect } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatoMoneda } from "../helpers";

const PanelPresupuesto = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [procentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  // UseEffect escuchando la modificación de gastos
  useEffect(() => {
    // Aplicando la lógica para obtener lo que se ha gastado
    // Reduce es el metodo que te suma todo lo que haya dentro del arreglo en una cifra
    // total es un temp
    // gasto es una instancia de gastos para sacar la cantidad
    // Y la operación empieza en cero
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    // Mandando al setGastado lo que hemos gastado
    setGastado(totalGastado);
    // Sacando lo que queda disponible
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);

    // Sacar el porcentaje para la grafica
    const nuevoPorcentaje = ((( presupuesto - totalDisponible ) / presupuesto ) * 100 ).toFixed(2)
    setPorcentaje(nuevoPorcentaje)
}, [gastos]);

  const handleResetApp = () => {
    const confirmacion = confirm("¿Deseas borrar todos los valores?")
    if (confirmacion) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div>
      <div className="container text-center text-black mb-3">
        <div className="card p-5 shadow-lg">
          <div className="row d-flex justify-content-center">
                <div className="col-md-6 mb-md-2" style={{ width: 250 }}>
                    {/* <img src="https://indiehoy.com/wp-content/uploads/2020/07/rick-morty-600x900.jpg" className="rounded mx-auto d-block" width={250} alt="..."/> */}
                    <CircularProgressbar 
                        value={procentaje}
                        text={`${Math.round(procentaje)}%`}
                        circleRatio={0.75}
                        styles={buildStyles({
                          textColor: procentaje > 100 ? '#DC2626' : '#0d6efd',
                          rotation: 1 / 2 + 1 / 8,
                          strokeLinecap: "butt",
                          pathColor: procentaje > 100 ? '#DC2626' : '#0d6efd',
                          trailColor: "#eee"
                        })}
                    />
                </div>
                
                <div className="col-md-6">
                    <button 
                      className="btn btn-danger btn-block w-100 mb-3"
                      type="button"
                      onClick={handleResetApp}
                    >
                        Resetear app
                    </button>
                    <p className="text-lg-start text-md-center">
                        <span className="fw-bold">Presupuesto: </span>{" "}
                        {formatoMoneda(presupuesto)}
                    </p>
                    {/* Condicional por si el user se pasa de su presupueto, lo dispobible se ponga en rojo */}
                    <p className={`${disponible < 0 ? 'text-lg-start text-md-center text-danger' : 'text-lg-start text-md-center'}`}>
                        <span className="fw-bold">Disponible: </span>{" "}
                        {formatoMoneda(disponible)}
                    </p>
                    <p className="text-lg-start text-md-center">
                        <span className="fw-bold">Gastado: </span>{" "}
                        {formatoMoneda(gastado)}
                    </p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelPresupuesto;
