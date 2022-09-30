import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar,eliminarGasto}) => {
  return (
    <div>
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
    </div>
  )
}

export default ListadoGastos