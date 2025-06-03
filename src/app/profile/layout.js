import React from 'react'

function ProfileLayout({children}) {
  return (
    <div className='bg-slate-100 dark:bg-slate-800'>
      <div className='max-w-screen mx-auto container px-4 py-10'>
        { children}
      </div>
    </div>
  )
}

export default ProfileLayout;
