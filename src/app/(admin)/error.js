"use client"
import React from 'react'

function ErrorLayout({error}) {
  return (
    <div className='text-center text-2xl'>{error.message}</div>
  )
}

export default ErrorLayout;