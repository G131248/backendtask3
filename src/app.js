
const { Console } = require("console")
const express = require("express")
const app = express()
const port = process.env.port || 3000

const path = require("path")
const task3 = path.join(__dirname, "../public")
app.use(express.static(task3))



app.set("view engine", "hbs");

const viewsDirectory= path.join(__dirname, '../temp1/views')
app.set('views', viewsDirectory)

var hbs = require("hbs")
const partialsPath = path.join(__dirname, '../temp1/partials')
hbs.registerPartials(partialsPath)


app.get("/", (req,res)=>{
    res.render('index', {
        title: "DYNAMIC HOME PAGE",
          img1: "images/img1.jpeg"
    })
})
app.get("/instructions", (req,res)=>{
    res.render('instructions', {
        title: "DYNAMIC INUSTRUCTIONS PAGE",
         img2: "images/img2.jpeg"
    })
})

app.get("/services", (req,res)=>{
    res.render('services', {
        title: "DYNAMIC SERVICES PAGE",
           img3: "images/img3.jpeg"
    })
})
app.get("/team", (req,res)=>{
    res.render('team', {
        title: "DYNAMIC TEAM PAGE",
         img4: "images/img4.jpeg"
    })
})
app.get("/details", (req,res)=>{
    res.render('details', {
        title: "DYNAMIC DETAILS PAGE",
          img5: "images/img5.jpeg"
    })
})
app.listen(port, ()=>{
    console.log("APP WORKING")
})

