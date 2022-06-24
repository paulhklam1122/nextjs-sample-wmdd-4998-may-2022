import { useRouter } from 'next/router'

const PostShow = () => {
  const router = useRouter()
  const { id, title, body } = router.query

  return (
    <div>
      <h1>ID: {id}</h1>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default PostShow
