const fs=require("fs")
const path =require("path")
const stream=require("stream")
const express=require("express")
const server=express()

server.use(express.json({limit:"50mb"}))
server.use(express.urlencoded({extended:true,limit:"50mb"}))
server.use(express.static(path.join(__dirname,'./public')))

server.get("/",(req,res)=>{
    res.sendFile("home.html",{root:path.join(__dirname,"./public")})
})

server.post("/posted",async(req,res)=>{
    const reqBody=req.body
    const unit8String=reqBody.unit8String
    const unit8Arr=unit8String.split(",")
    const buffer=Buffer.from(unit8Arr)
    // important part weel define extention
    // fs.writeFileSync("./test.jpg",buffer)
    console.log(buffer)
    // fs.writeFile("./test.txt",buffer,err=>{
    //     if (err) {
    //         console.log(err)
    //     }
    // })
    fs.writeFile("./test.jpg",buffer,err=>{
        if (err) {
            console.log(err)
        }
    })
    res.redirect("/front-posted")
})
server.get("/front-posted",(req,res)=>{
    res.send(`data comign from front end side !!!!! <a href="/">Back Home!</a>`)
})

server.listen(3000,()=>{
    console.log("/////////////////////////////////////////////////////////////////////////")
})

