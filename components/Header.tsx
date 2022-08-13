import React from 'react'

const Header:React.FC<{title:string}> = ({title}) => {
  return (
    <div>
        <h1 className='font-weight-light display-1 text-center'>
           {title}
        </h1>
    </div>
  )
}

export default Header