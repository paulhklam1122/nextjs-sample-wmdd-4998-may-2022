import Link from 'next/link'
import { POSTS } from '../../data'

export const getStaticProps = async () => {
  return {
    props: {
      posts: POSTS
    }
  }
}

const PostIndex = props => {
  const { posts } = props

  return (
    <div>
      <h1>Posts Index</h1>
      <ul>
        {posts.map(post => (
          <div key={post.id}>
            <Link
              href={{
                pathname: '/posts/[id]',
                query: { id: post.id, title: post.title, body: post.body }
              }}
            >
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default PostIndex
