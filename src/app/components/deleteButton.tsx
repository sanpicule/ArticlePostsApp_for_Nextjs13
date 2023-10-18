'use client'
import { deleteArticle } from '@/blogAPI'
import { useRouter } from 'next/navigation'
import React from 'react'

type DeleteButtonProps = {
  id: string
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter()
  const handleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    await fetch(`${API_URL}/api/blog/${id}`, {
      method: 'DELETE'
    })
    router.push('/')
    router.refresh()
  }
  return (
    <button
      className='py-2 px-4 rounded-md fixed right-4 top-20 shadow-xl bg-red-400 text-sm'
      onClick={handleDelete}
    >
      削除
    </button>
  )
}

export default DeleteButton
