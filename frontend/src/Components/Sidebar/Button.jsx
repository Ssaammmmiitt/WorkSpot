import React from 'react'

const Button = ({onClickHandeler, value , title}) => {
  return (
    <button onClick={onClickHandeler} value={value} className={'px-4 py-1 border text-base hover:bg-Primary hover:text-white'}>
      {title}  
    </button>
)
}

export default Button