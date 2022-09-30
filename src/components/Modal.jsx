import React from "react";
import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";

const Modal = ({guardarGasto, gastoEditar}) => {
    // Hooks para que por el form recuperen el valor introducido por el user
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')
    // State para guardar la edición del objeto
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    // Mensaje de err 
    const [mensaje, setMensaje] = useState('')

    // Llenar el modal para editar
    useEffect(() => {
      if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setDescripcion(gastoEditar.descripcion)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
      } else {
        setNombre('')
        setCantidad('')
        setCategoria('')
        setDescripcion('')
      }
    }, [gastoEditar])
    

    // Función después de enviar el form
    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, cantidad, categoria, descripcion].includes('')) {
            setMensaje("No se aceptan campos vacios");

            // Otra opc de ocultar la alert
            // setTimeout(() => {
            //     setMensaje('')
            // }, 3000);
            return
        }
        // Reseteando los campos
        setMensaje('')
        
        // Creando el objeto de nuevo gasto que viene desde app
        guardarGasto({nombre, cantidad, categoria, descripcion, id, fecha})

        setNombre('')
        setCantidad('')
        setCategoria('')
        setDescripcion('')
        setId('')

    }
    

    return (
        <div>
        <div
            className="modal fade text-black"
            id="agregaGasto"
            tabIndex="-1"
            aria-labelledby="agregaGasto"
            aria-hidden="true"
        >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="agregaGasto">
                    {gastoEditar.nombre ? "✍ Editar gasto" : "👉 Agrega un nuevo gasto"}
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <div className="modal-body">
                <form 
                    onSubmit={handleSubmit}>
                    <div className="mb-3">
                    {/* Mensaje de error */}
                    {mensaje && <Mensaje tipo="alert alert-danger">{mensaje}</Mensaje>}
                    <label htmlFor="nombre" className="col-form-label">
                        Gasto:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Supermercado"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="cantidad" className="col-form-label">
                        Cantidad:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="cantidad"
                        placeholder="$200.00"
                        value={cantidad > 0 ? cantidad : ""}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="categoria" className="col-form-label">
                        Categoría:
                    </label>
                    <select className="form-select" id="categoria" 
                            value={categoria}
                            onChange={e => setCategoria(e.target.value)}>
                            <option defaultValue>Selecciona una categoría</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="comida">Comida</option>
                            <option value="casa">Casa</option>
                            <option value="gastos">Gastos Varios</option>
                            <option value="ocio">Ocio</option>
                            <option value="salud">Salud</option>
                            <option value="suscripciones">Suscripciones</option>
                    </select>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="message" className="col-form-label">
                        Mensaje:
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        placeholder="Agrega un mensaje para identificar tu gasto"
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary my-3 uppercase w-100">
                        {gastoEditar.nombre ? "Guardar cambios" : "Añadir gasto"}
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Modal;
