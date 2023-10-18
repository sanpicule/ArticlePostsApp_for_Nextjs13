import { ArticleCardProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <article key={article.id} className='text-white'>
          <Link href={`articles/${article.id}`} className='hover:opacity-75'>
            <Image
              className='mt-4'
              src={`https://source.unsplash.com/collection/1346951/1000×500?sig=${article.id}`}
              alt=''
              width={1280}
              height={50}
            />
          </Link>
          <div className='bg-white p-4 flex flex-col'>
            <p className='text-slate-500 text-xs mt-2'>{new Date(article.createdAt).toLocaleString()}</p>
            <Link href={`articles/${article.id}`} className='text-slate-700 font-bold text-xl'>{article.title}</Link>
            <Link href={`articles/${article.id}`} className='text-slate-400 text-md mt-2'>{article.content.length > 70 ? article.content.substring(0, 70) + '...' : article.content}</Link>
            <div>
              <Link href={`articles/${article.id}`} className='text-blue-600 text-xs'>続きを読む...</Link>
            </div>
          </div>
        </article>
    </div>
  )
}

export default ArticleCard
