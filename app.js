const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))

var todos = ["Buy Food", "Cook Food","Eat food"];

app.get("/", function(req, res){
    var today = new Date();
    var day=""
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US", options);
    res.render("lists",{kindofDay:day, todos:todos})  
})

app.post('/',function(req, res){
    var item = req.body.newItem;
    todos.push(item)
    res.redirect("/")
})

app.listen(3000, function(){
    console.log("Server running in port 3000");
})