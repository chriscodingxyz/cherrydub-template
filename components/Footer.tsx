import React from 'react'

export default function Footer () {
  return (
    <div className=' h-[20px] border-t w-full'>
      <div className='h-full flex-center text-xs font-silkscreen'>
        cherrydub 🍒 © {new Date().getFullYear()}
      </div>
    </div>
  )
}
