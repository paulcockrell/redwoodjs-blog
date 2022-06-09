import { Link, routes } from '@redwoodjs/router'
import type { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article key={article.id}>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
