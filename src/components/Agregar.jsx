import React from 'react'
import { useState, useEffect } from 'react';
import Modal from './Modal';

const Agregar = ({guardarGasto, gastoEditar, setGastoEditar}) => {

    const [modal, setModal] = useState(false)

    const handleNuevoGasto = () =>{
        setGastoEditar({})
        setModal(true)

        return
    }

    // useEffect(() => {
    //     if (Object.keys(gastoEditar).length > 0) {
    //         setModal(true)
    //         console.log("Gasto editar tiene algo");
    //     }
    // }, [gastoEditar])

    return (
        <div className='container d-flex justify-content-end mt-5 mb-5'>
            <h1 onClick={handleNuevoGasto} data-bs-toggle="modal" data-bs-target="#agregaGasto">
                <i className="bi bi-plus-circle-fill text-primary" style={{fontSize: 1.5 + 'em'}}></i>
            </h1>
            {<Modal
                            guardarGasto={guardarGasto}
                            gastoEditar={gastoEditar}
                            handleNuevoGasto={handleNuevoGasto}
            />}
        </div>

    )
}

export default Agregar