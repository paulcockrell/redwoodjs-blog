import { render, screen } from '@redwoodjs/testing/web'

import Article from './Article'

describe('Article', () => {
  it('renders a blog post', () => {
    const article = {
      id: 1,
      title: 'First post',
      body: 'Hello, World!',
      createdAt: new Date().toISOString(),
    }
    render(<Article article={article} />)

    expect(screen.getByText(article.title)).toBeInTheDocument()
    expect(screen.getByText(article.body)).toBeInTheDocument()
  })
})
