import React from 'react'
import "./ValidError.sass"

const ValidError = ({field}) => {
  return (
    <div className='error'>
        Your {field} is not valid!
    </div>
  )
}

export default ValidError