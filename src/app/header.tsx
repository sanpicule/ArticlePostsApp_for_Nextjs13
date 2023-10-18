import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-4 bg-slate-700 flex items-center justify-between text-white fixed w-full top-0 left-0 z-10'>
      <div>
        <h1 className='text-xl font-bold'>
          <Link href='/'>Next.js Blog</Link>
        </h1>
      </div>
      <div>
        <nav>
          <Link href='/articles/new' className='text-xs p-2 bg-orange-400 rounded-md shadow-md text-black'>記事を書く</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
