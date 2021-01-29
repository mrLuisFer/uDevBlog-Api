import { RequestHandler } from "express"

import Post from "../../model/post.model"

// Actualica un post
export const putPost: RequestHandler = async (req, res) => {
  const id = req.params.id
  const body = req.body

  if (!id) return res.status(404).send("id has no founded")
  if (!body) return res.status(404).send("Body has no founded")

  if (id && body) {
    const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    if (!postUpdated) return res.status(204).json()
    res.json(postUpdated)
  } else {
    res.send("Some error")
  }
}
