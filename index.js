const express  = require("express")
const cors = require("cors")
const port = 5000
const app  = express()

//middleware
app.use(cors())
app.use(express.json())

app.get("",(req, res )=>{
    res.json({message:"Welcome to this express api "})
})
const tasks = [
    {id:1,task:"Learn node js with me"},
    {id:2,task:"Learn django"},
]
app.get("/tasks",(req,res)=>{
    res.json(tasks)
})

app.listen(port,()=>{
    console.log(`api is running on http://localhost:${port}`)
})
