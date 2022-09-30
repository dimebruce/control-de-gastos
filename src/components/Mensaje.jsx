import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`${tipo}`}>
      {children}
    </div>
  )
}

export default Mensaje
