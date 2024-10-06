import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header () {
  return (
    <div className='font-silkscreen w-screen border-b sticky top-0 z-101 bg-background'>
      <div className=' container justify-between flex items-center w-screen'>
        <span className='text-xs'>🍒 cherrydub</span>
        {/* <span className=''>cherrydub</span> */}
        <ThemeToggle />
      </div>
    </div>
  )
}
