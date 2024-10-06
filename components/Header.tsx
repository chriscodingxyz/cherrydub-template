import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header () {
  return (
    <div className='w-screen border-b sticky top-0 z-101 bg-background'>
      <div className='mx-auto container justify-between flex items-center w-screen px-4'>
        <span>cherrydub 🍒</span>
        <ThemeToggle />
      </div>
    </div>
  )
}
