var urn1 = "";
var mobile1 = "";
var course1 = "";
var year1 = "";

var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dev@singh7465",
});

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var urn = document.getElementById("urn").value;
    var mobile = document.getElementById("mobile").value;
    var course = document.getElementById("course").value;
    var year = document.getElementById("year").value;

    urn1 = urn;
    mobile1 = mobile;
    course1 = course;
    year1 = year;

    // Print the values to the console
    alert(urn + mobile + course + year);
    console.log("Inside Event : " + urn + mobile + course + year);
    conn_db();
});

function conn_db() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    // con.query("CREATE DATABASE sample", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });
    // const a = [];



    // con.query("use ashok", function (err, result) {
    //     if (err) throw err;
    //     console.log("Using ashok Database\n");
    //     con.query("select * from students", function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //         console.log("Size of Result : " + Object.keys(result).length);
    //         console.log(result[1].Name + "" + result[1].ID);
    //     });
    // });
    // con.query("insert into students(ID,Name) values(6,'Sonu')", function (err) {
    //     if (err) throw err;
    //     console.log("Record Inserted.");
    // });

    console.log("Outside Event : " + urn1 + mobile1 + course1 + year1);
}
