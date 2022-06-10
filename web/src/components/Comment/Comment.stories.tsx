import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Paul Cockrell',
        body: 'This is an comment',
        createdAt: new Date().toISOString(),
      }}
    />
  )
}

export default { title: 'Components/Comment' }
