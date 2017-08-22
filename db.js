var mysql = require('mysql');

var pool = mysql.createPool({
    "host": "localhost",
    "port" : 3306,
    "user": "root",
    "password": "admin",
    "schema": "bloodbank",
    "connectionLimit":200
});

exports.executeQuery = function(sql, callback) {
  // get a connection from the pool
  pool.getConnection(function(err, connection) {
    if(err) { console.error(err); callback(err,null); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.error(err); callback(err,null); return; }
      callback(null, results);
    });
  });
};
