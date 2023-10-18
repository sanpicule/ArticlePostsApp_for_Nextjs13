import DeleteButton from '@/app/components/deleteButton'
import Image from 'next/image'
import React from 'react'

const Article = async ({ params }: { params: { id: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${API_URL}/api/blog/${params.id}`, { next: { revalidate: 60 } })
  const article = await res.json()

  return (
    <>
      <DeleteButton id={params.id} />
      <div className='max-w-3xl mx-auto p-20'>
        <Image
          className='mt-4'
          src={`https://source.unsplash.com/collection/1346951/1000×300?sig=${article[0].id}`}
          alt=''
          width={1280}
          height={300}
        />
        <h1 className='text-center mt-10 text-lg font-bold'>{article[0].title}</h1>
        <div>
          <p className='text-sm text-slate-300 mt-10'>{article[0].content}</p>
        </div>
      </div>
    </>
  )
}

export default Article
