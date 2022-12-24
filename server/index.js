const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: 'localhost',
    password: "admin",
    database: "users_sys"
})

app.post("/create", (req,res) => {
    const name = req.body.name;
    const country = req.body.country;

    db.query(
        "INSERT INTO accunets (name,country,date) VALUES (?,?,now())",
        [name,country],
        (err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send("Values Inserted");
            }
        }
        );

})


app.get("/accunets", (req , res) => {
    db.query(
        "SELECT * FROM accunets", (err , result) => {
            if (err) {
                console.log(err);
            }

            else {
                res.send(result)
            }
        }
    );
})


app.post("/delme", (req,res) => {
    const id = req.body.id;

    db.query(
        `DELETE FROM accunets WHERE id = ${id}`,
        (err) => {
            if (err) {
                console.log(err);
            }

            else {
                res.send("User Deleteed");
            }
        }
    )
})

app.listen(3001, () => {
    console.log("Welcome To The Port : 3001");
})