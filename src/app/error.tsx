"use client"
import React from 'react'

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className='bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 rounded shadow-md p-2'>
      <h3>エラーが発生しました</h3>
      <button onClick={reset} className='bg-red-500 text-white p-2 rounded-md'>もう一度試す</button>
    </div>
  )
}

export default Error
