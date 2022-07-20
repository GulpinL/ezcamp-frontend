import React from 'react'
import "./ValidError.sass"

const ValidError = ({ field }) => {
  return (
    <div className='error'>
      {
        field === "Confirm" ? "Confirm password is not correct" : `Your ${field} is not valid!`
      }
    </div>
  )
}

export default ValidError