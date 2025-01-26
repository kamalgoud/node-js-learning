const express = require("express")
const fs = require('fs')
const app = express()
const PORT = 8080
const users = require("./MOCK_DATA.json")

//middleware plugin
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("hello from 2nd middleware ");
    next()
})

// Create a router for user-related routes
const userRouter = express.Router();

// Route to get users in HTML format
userRouter.get("/", (req, res) => {
    const htmlData = `
      <ul>
          ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
    `;
    res.send(htmlData);
});

// REST API to get all users
userRouter.get("/api", (req, res) => {
    res.json(users);
});

// REST API to get a user by ID
userRouter.get("/api/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.filter((user) => user.id === id);
    res.json(user);
});

// REST API to create a new user
userRouter.post("/api", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "FAILURE", error: err.message });
        }
        res.status(201).json({ status: "SUCCESS", id: users.length });
    });
});

// Use the router for user-related routes
app.use("/users", userRouter);

app.listen(PORT, () => console.log("server started"));