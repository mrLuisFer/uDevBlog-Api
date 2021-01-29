import { RequestHandler } from "express"
import Post from "../../model/post.model"

// Obtener posts
export const getPots: RequestHandler = async (req, res) => {
  try {
    const postData: Object | JSON = await Post.find()

    if (!postData) return res.status(404).send("Post data not found")

    return res.json(postData)
  } catch (error) {
    res.json({ error: error })
  }
}
