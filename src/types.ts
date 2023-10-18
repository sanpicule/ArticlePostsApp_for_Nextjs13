export type Article = {
  id: string,
  title: string,
  content: string,
  createdAt: string
}

export type ArticleCardProps = {
  article: Article
}