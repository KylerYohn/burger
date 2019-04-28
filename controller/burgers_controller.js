var express = require("express");

var router = express.Router();

//import the model to use its database functions

var burger = require("../models/burger");


//create all of our routes and set up the logic within the routes

router.get("/", function(req,res){
    burger.all(function(data){
        var handle = {
            burgers: data
        };
        console.log(handle);
        res.render("index", handle);
    });
});

//if the user adds a new burger this will be ran
router.post("/", function(req, res){
    var name = req.body.burger_name;
    var dev = false;
    console.log(name);
    burger.add(name, dev, function(result){
        res.redirect("/");
    });
    
});

//if the user changes/eats a burger then this will be ran
router.put("/:id", function(req, res){
    var id = req.params.id;
    var dev = true;
    console.log(dev);
    console.log(id);
    burger.update( id, dev, function(result){
        
    });
   
});



module.exports = router;