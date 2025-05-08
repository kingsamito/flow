import React from 'react'


//This is to make autocomplete work on this button component
/**
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement>} ButtonProps
 */

/**
 * @param {ButtonProps & { children: React.ReactNode }} props
 */

const Btn = ({children, className, ...props}) => {
  return (
    <button className={`px-6 py-2 rounded  ${className}`} {...props}>
      {children}
    </button>
  )
}


export default Btn