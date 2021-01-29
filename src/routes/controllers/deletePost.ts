import { RequestHandler } from "express"

import Post from "../../model/post.model"

// Eliminando el post
export const deletePost: RequestHandler = async (req, res) => {
  console.log(req.params)

  const id: string | number = req.params.id

  if (!id) return res.status(404).send("The id was not found")
  else {
    try {
      const article = await Post.findByIdAndDelete(id)
      if (!article) return res.status(204).json({ post: "no founded" })
      return res.send(article)
    } catch (error) {
      res.send(error)
    }
  }
}
