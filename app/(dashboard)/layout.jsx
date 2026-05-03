import React from 'react'
import NavBar from '../components/NavBar'

const layout = ({children}) => {
  return (
    <div className='' >
      <NavBar/>
      <div className="">{children}</div>
    </div>
  )
}

export default layout