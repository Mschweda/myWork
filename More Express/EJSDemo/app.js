const express = require("express");
const app = express();
const port = 3000

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    let thing = req.params.thing;
    res.render("love", {thingLet: thing})
});

app.get("/posts", function(req, res){
    let posts = [
        {title: "post 1", author: "Sue"},
        {title: "My adorable dog", author: "Marisa"},
        {title: "FML", author: "Chuck"}
        ];
        res.render("posts", {posts: posts});
})

app.listen(port, () => console.log(`Server is listening! ${port}!`))