export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const date   = Date.now().toString(36)

    return random + date
}

export const formatoFecha = fecha => {
    // Instanciamos la fecha para capturarla
    const fechaNueva = new Date(fecha)
    // Creando las opciones de formato
    const opciones = {
        year:  'numeric',
        month: 'long',
        day:   '2-digit'

    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const formatoMoneda = cantidad => {

        const opciones = {
            style: 'currency',
            currency: 'USD'
        }
        
    return cantidad.toLocaleString('en-US', opciones)
}