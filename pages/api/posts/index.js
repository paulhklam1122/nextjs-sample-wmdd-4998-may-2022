import { uuid } from 'uuidv4'
import { POSTS } from '../../../data'
import { apiResponse } from '../../../utils/apiResponse'
import { validateFieldPresence } from '../../../utils/validations'

const handler = (req, res) => {
  let posts = POSTS

  if (req.method === 'GET') {
    apiResponse(res, 200, { posts })
  }

  if (req.method === 'POST') {
    let id = uuid()

    const { title, body } = req.body

    const newPost = {
      id,
      title,
      body
    }

    validateFieldPresence(res, 'title', title) &&
      validateFieldPresence(res, 'body', body) &&
      posts.push(newPost) &&
      apiResponse(res, 200, { newPost, posts })
  }
}

export default handler
