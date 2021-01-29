import { RequestHandler } from "express"

import Post from "../../model/post.model"

// obtener un articulo por ids
export const getArticle: RequestHandler = async (req, res) => {
  console.log(req.params)
  const id: number | string = req.params.id

  if (id) {
    console.log(id)

    try {
      const article = await Post.findById(id)
      if (!article) return res.status(404).json()
      return res.send(article)
    } catch (error) {
      res.send(error)
    }
  }
}
