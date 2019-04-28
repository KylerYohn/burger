//require the connection with mysql
var connection = require("./connection");


//create a n orm that will be used to retrieve and store data in the database

var orm = {
    
    //when this function is called it will select all of the burgers from the database
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err, results){
            if (err) throw err;

            cb(results);
            
        });
        
    },
//when this is called it will create a new burger in the table
    insertOne: function(name, devoured, cb){
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [name, devoured], function(err, results){
            if (err) throw err;

            cb(results);
        });
    },
//when this is called it will set the burger to being devoured
    updateOne: function(id, dev, cb){
        connection.query("UPDATE burgers SET devoured = ? WHERE id= ?", [dev, id],function(err,results){
            if (err) throw err

            cb(results);
        });
    }


}

module.exports = orm;