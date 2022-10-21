import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
      gastos, 
      setGastoEditar, 
      eliminarGasto,
      filtro,
      gastosFiltrados}) => {
  return (
    <div>
       
        {/* Si existe un filtro, pintamos el filtro, de lo contrario sólo los gastos */}

        {
          filtro ? (
            <>
                <h1 className='text-black m-3'>{gastosFiltrados.length ? 'Ya hay gastos 🐶' : 'Aún no hay gastos en esta categoría 😢'}</h1>

                {gastosFiltrados.map( gasto => (
                    <Gasto
                    // Mandando los gastos, para su impresión en el DOM
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    />
                ))}
            </>
          ) :
          (
            <>
                <h1 className='text-black m-3'>{gastos.length ? 'Ya hay gastos 🐶' : 'Aún no hay gastos 😢'}</h1>

                {gastos.map( gasto => (
                  <Gasto
                  // Mandando los gastos, para su impresión en el DOM
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                    />
                ))}
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos