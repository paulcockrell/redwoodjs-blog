import Comment from './Comment'

export const defaultView = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Paul Cockrell',
          body: 'This is an comment',
          createdAt: new Date().toISOString(),
          postId: 1,
        }}
      />
    </div>
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: 'moderator',
    id: 1,
    email: 'moderator@moderator.com',
  })

  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Paul Cockrell',
          body: 'This is an comment',
          createdAt: new Date().toISOString(),
          postId: 1,
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
