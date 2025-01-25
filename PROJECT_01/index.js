const express = require("express")

const app = express()
const PORT=8080
const users = require("./MOCK_DATA.json")

app.get("/users",(req,res)=>{
    const htmlData = `
    <ul>
        ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(htmlData);
})


//rest apis

app.get("/api/users",(req,res)=>{
    res.json(users)
})

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id)
    const user = users.filter((user)=>{return user.id===id})
    res.json(user)
})


app.listen(PORT,()=>console.log("server started"));