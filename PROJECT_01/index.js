const express = require("express")
const app = express()
const PORT = 8080
const userRouter = require("./route")

//middleware plugin
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("hello from 2nd middleware ");
    next()
})

// Use the router for user-related routes
app.use("/users", userRouter);

app.listen(PORT, () => console.log("server started"));