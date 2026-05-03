import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    
    <div className='flex justify-center items-center h-screen flex-col gap-5'>
    <div className='text-red-700 text-2xl font-bold capitalize'>
      not found

    </div>
      <Link href="/" className='text-blue-400 '>Go To Dashboard</Link>
    </div>
  )
}

export default NotFound