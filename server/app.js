const express = require("express")

const app = express()

const server = require("http").Server(app)

app.use(express.urlencoded({extended: true}))

app.use(express.json({extended: true}))

app.use(express.static("/public"))

app.use("/static", express.static("/public"))

app.get("/", (req, res) =>{
    res.send("| Welcome to worknow API |")
})

app.set("port", 9800)

app.set("address", "localhost")

server.listen(app.get("port"), app.get("address"), () => {
    console.log("Server has running at http://"+app.get("address")+":"+app.get("port"))
})