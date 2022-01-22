const express = require('express');
const mysql = require ('mysql2');
const cors = require ('cors');
const app = express();
const db = mysql.createPool({
    host:'mysql_db',
    user:'student',
    password:'student',
    database:'fibo'
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res) =>{
    res.send('Mateusz Ucinski home')
})
app.get('/get',(req,res) =>{
    console.log('Server get log');
    const q = " SELECT number FROM numbers";
    db.query(q, (err,result)=>{
        res.send(result)
    })
})
app.post('/insert', (req,res)=>{
    console.log('Server insert log');
    const number = req.body.setNumber;
    const q = "INSERT INTO numbers (number,value) values (?,?)";
    db.query(q, [number], (err,result)=>{
        console.log(result)
    })
})
app.listen('3001',()=>{
    console.log("Listening on port 3001");
})