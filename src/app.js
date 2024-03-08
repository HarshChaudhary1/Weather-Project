let express=require("express")
let app=express()
let hbs=require("hbs")
let port=3000
let path=require("path")
let indexpath=path.join(__dirname,"../templates/views")
let partialpath=path.join(__dirname,"../templates/partials")
// console.log(partialpath)
app.set("views",indexpath)
app.set("view engine","hbs")
hbs.registerPartials(partialpath)
// app.use(express.static(indexpath))
app.get("/",(req,res)=>{
    res.render("index.hbs")
})
app.get("/about",(req,res)=>{
    res.render("about.hbs")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.listen(port,()=>{
    console.log("listening to port 3000")
})