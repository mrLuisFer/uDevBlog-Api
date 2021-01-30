import { RequestHandler } from "express"

import Post from "../../model/post.model"

// Crear un post
export const postPosts: RequestHandler = async (req, res) => {
  const post = new Post(req.body)

  if (post) {
    try {
      console.log(req.body)

      try {
        if (!req.body.title) return res.send("Title has no founded")
        if (!req.body.description) return res.send("Description has no founded")
        if (!req.body.img) return res.send("Img has no founded")
        if (!req.body.html_content) return res.send("Content has no founded")

        res.send(post)
        const savedPost = await post.save()
        res.json(savedPost)
      } catch (error) {
        res.send(error)
      }
    } catch (error) {
      res.send(error)
    }
  } else {
    res.json({
      error: "The post has a incorrect structure",
    })
  }
}
