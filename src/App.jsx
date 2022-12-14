import { useState, useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import { generarId } from './helpers'

function App() {

  // Presupuesto
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  // Verificando si es valido, para mostrar el otro componente
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  // State para guardar Gasto
  // So en localStorage existe gastos, entonces traemos el Json, de lo contrario iniciamos con un array vacio
  const [gastos, setGastos] = useState( localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])

  // Const para el editar el gasto en el modal
  const [gastoEditar, setGastoEditar] = useState({})

  // Filtro 
  const [filtro, setFiltro] = useState('')
  // Mostrar los gastos filtrados / Pintar
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  // Hook en espera del cambio de filtro
  useEffect(() => {
    if(filtro){
      // Filtrar gastos por categoria
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro])
  

  // LocalStorage presupuesto
  useEffect(() => {
    localStorage.setItem('presupuesto', JSON.stringify( presupuesto ?? 0 ))
  }, [presupuesto])
  
  // Redireccionando al panel al user si es que existe algun valor en presupuesto de LS
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if (presupuestoLS > 0 ) {
      setIsValidPresupuesto(true)
    }
  }, [])

  // LocalStorage de gastos
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify( gastos ) ?? [])
  }, [gastos])
  
  


  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id )
    setGastos(gastosActualizados)
  }

  // Guardando el objeto de nuevo gasto
  const guardarGasto = gasto => {
    if (gasto.id) {

      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    } else {
       // Asignandole un id
       gasto.id = generarId()
       gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
  }

  return (
  <>
    <div className='mb-5'>
      <Header
        // Mandando al Header el prop de presupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        // Mandando al Header el prop de isValid
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        guardarGasto={guardarGasto}
        // se manda gastos para poder iterar y crear la lista en el DOM
        gastos={gastos}
        setGastos={setGastos}
        // Mandando el state de gastoEditar
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
        eliminarGasto={eliminarGasto}
        filtro={filtro}
        setFiltro={setFiltro}
        gastosFiltrados={gastosFiltrados}
        />

    </div>
    
    <Footer/>
  </>
  )
}

export default App
