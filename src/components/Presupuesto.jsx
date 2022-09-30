import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'

const Presupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

  // Error o success -Alert-
  const [mensaje, setMensaje] = useState('')

  // Validación de presupuesto input
  const handlePresupuesto = (e) => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto válido");

      // El return rompe con el ciclo si este se cumple
      return
    } 
    // Quita la alerta, si es que tenía una previa
    setMensaje('')
    setIsValidPresupuesto(true)

    console.log( presupuesto );
  }

  return (
    <div className='container text-center mb-5'>
      <div className='container card p-5 mt-5 shadow-lg'>
        <form onSubmit={handlePresupuesto}>
          <div className="form-outline mb-4">
            <label className="form-label fs-2 text-black" >Presupuesto</label>
            <input 
              type="number" 
              id="presupesto" 
              className="form-control text-center"
              placeholder="Añade tu presupuesto"
              value={! presupuesto ? "" : presupuesto}
              onChange={ e => setPresupuesto(Number(e.target.value))}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block w-100">Añadir</button>

          // Mensaje de error
          {mensaje && <Mensaje tipo="alert alert-danger">{mensaje}</Mensaje>}

        </form>
      </div>
    </div>
  )
}

export default Presupuesto
