import express from "express"
import path from "path"
import homepageRouter from "./homepageRouter.js"
import assetsRouter from "./assetsRouter.js"
import routes from "../routes/routes.js"
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.APP_PORT || 3000
const publicPath = path.join(path.resolve(), "public")
const distPath = path.join(path.resolve(), "dist")

const app = express()

if (process.env.APP_ENV === "production") {
    app.use("/", express.static(distPath))
} else {
    app.use("/", express.static(publicPath))
    app.use("/src", assetsRouter)
}

routes(app)

app.use(homepageRouter)

app.listen(port, () => {
    console.log("Server listening on port", port)
})