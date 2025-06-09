import React from 'react'

function ProductDetailsLayout({ children }) {
  return (
    <section className="py-2 bg-white md:py-16 dark:bg-slate-900 antialiased max-w-screen-xl px-4 mx-auto 2xl:px-0">
      {children}
    </section>
  )
}

export default ProductDetailsLayout;
