//create a connection with mysql
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kyleryohn12!",
    database: "burger_db"
});

}

//make the connection with mysql
connection.connect(function(err){
    if (err) throw err;

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;