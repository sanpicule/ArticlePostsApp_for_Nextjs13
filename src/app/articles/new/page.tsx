'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
  const router = useRouter()
  const [url, setUrl] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    setLoading(true)
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    await fetch(`${API_URL}/api/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: url, title, content })
    })
    router.push('/')
    router.refresh()
  }
  return (
    <div className='p-4'>
      <h2 className='font-bold text-lg text-white'>ブログ新規作成</h2>
      <form className='bg-gray-300 p-4 rounded mt-2' onSubmit={handleSubmit}>
        <div>
          <label className='mt-2 block'>・URL</label>
          <input
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='shadow border rounded w-full mt-2 px-3 py-2 text-slate-500 focus:outline-none '
          />
          <label className='mt-2 block'>・タイトル</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='shadow border rounded w-full mt-2 px-3 py-2 text-slate-500 focus:outline-none '
          />
          <label className='mt-2 block'>・本文</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='shadow border rounded w-full mt-2 px-3 py-2 text-slate-500 focus:outline-none '
          />
        </div>
        <button
          type='submit'
          className={`py-2 px-4 mt-2 rounded-md ${
            loading
              ? 'bg-gray-400 text-gray-500 cursor-not-allowed'
              : 'bg-orange-400'
            }`
          }
          disabled={loading}
        >投稿</button>
      </form>
    </div>
  )
}

export default Page
