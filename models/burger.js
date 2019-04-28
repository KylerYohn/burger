//require the orm so we have access to our datanase
var orm = require("../config/orm");


//call the specific functions required for each task
var burger = {
    all: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        });
    },
    add: function(name, dev, cb){
        orm.insertOne(name, dev, function(res){
            cb(res);
        });
    },

    update: function(name, dev, cb){
        orm.updateOne(name, dev, function(res){
            cb(res);
        })
    },
 

}

module.exports = burger;