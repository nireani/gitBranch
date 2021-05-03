const express= require("express")
const app = express()

const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.listen("3009",function(){
    console.log("hi");
})