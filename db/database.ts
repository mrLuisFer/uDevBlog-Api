import mongoose, { CollectionBase, Mongoose } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const dbName: string | undefined = process.env.DB_NAME
const password: string | undefined = process.env.DB_PASSWORD
const user: string | undefined = process.env.DB_USER
const collection: string | undefined = process.env.DB_COLLECTION

// This connect to the bd
export const connectToDb = async () => {
  const URL: string = `mongodb+srv://${user}:${password}@${collection}.mongodb.net/${dbName}?retryWrites=true&w=majority`

  if (URL) {
    try {
      const db: Mongoose = await mongoose.connect(`${URL}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        user: user,
        useFindAndModify: false,
      })

      console.log(`- ${db.connection.name} in MongoDB Connected!`)
      const collections: CollectionBase | string = db.connection.collection(
        "uDevBlog"
      ).collectionName
      console.log(`- The collection is ${collections}`)
    } catch (error) {
      console.error(error)
    }
  } else {
    console.log("URL isn't founded")
  }
}
