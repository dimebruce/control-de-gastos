import React from 'react'
import Agregar from './Agregar'
import Filtro from './Filtro'
import ListadoGastos from './ListadoGastos'
import PanelPresupuesto from './PanelPresupuesto'
import Presupuesto from './Presupuesto'

// Extrayendo presupuesto, isValidPresupuesto que viene desde app
const Header = ({ 
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto,
  guardarGasto,
  gastos,
  setGastos,
  gastoEditar,
  setGastoEditar,
  eliminarGasto,
  filtro,
  setFiltro,
  gastosFiltrados}) => {

  return (
      <div className='container-flui text-white text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity="1" d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,202.7C840,192,960,128,1080,128C1200,128,1320,192,1380,224L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <h1 className='mt-0 text-black'>Planificador de gastos</h1>

        {/* Ternarnio, donde si isValidPresupuesto es true, muestra el panel, sino para agregar el presupuesto */}
        {isValidPresupuesto ? (
          <>
              <PanelPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                gastos={gastos}
                setGastos={setGastos}
                setIsValidPresupuesto={setIsValidPresupuesto}
              />

              {/* Filtro de los gastos por categoría */}

              <Filtro
                filtro={filtro}
                setFiltro={setFiltro}
              />

              {/* Donde se ven los gastos agregados */}
                <ListadoGastos
                  gastos={gastos}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                  filtro={filtro}
                  gastosFiltrados={gastosFiltrados}
                />

              {/* Btn para agregar  */}
              <Agregar
                guardarGasto={guardarGasto}
                gastoEditar={gastoEditar}
                setGastoEditar={setGastoEditar}
              />
          </>

        ) : (
            <Presupuesto
              // Mandando presupuesto del Header a Presupuesto por prop
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              // Mandando a Presupuesto para modificar el state
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
        )}
      </div>
  )
}

export default Header
