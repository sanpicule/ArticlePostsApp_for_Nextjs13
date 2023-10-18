import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  // SSR
  const res = await fetch('http://localhost:3001/posts', { cache: "no-store" })

  if(!res.ok) {
    throw new Error('エラーが発生しました')
  }

  const articles = await res.json()
  return articles
}

export const getArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, { next: { revalidate: 60 } })

  if(res.status === 404) {
    notFound()
  }

  if(!res.ok) {
    throw new Error('エラーが発生しました')
  }

  const articles = await res.json()
  return articles
}

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDateTime = new Date().toISOString()
  const res = await fetch('http://localhost:3001/posts', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDateTime })
  })

  if(!res.ok) {
    throw new Error('エラーが発生しました')
  }

  const newArticle = await res.json()
  return newArticle
}

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
  })

  if(!res.ok) {
    throw new Error('エラーが発生しました')
  }

  const deleteArticle = await res.json()
  return deleteArticle
}