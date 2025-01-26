const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require('fs')

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

// REST API to get a user by ID
userRouter.get("/api/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.filter((user) => user.id === id);
    res.json(user);
});

userRouter
    .route("/api")
    .get(async (req, res) => {
        res.json(users);
    })
    .post(async (req, res) => {
        const body = req.body;
        users.push({ ...body, id: users.length + 1 });

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "FAILURE", error: err.message });
            }
            res.status(201).json({ status: "SUCCESS", id: users.length });
        });
    });


module.exports = userRouter
