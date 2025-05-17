const express = require('express')
const mysql2 = require('mysql2')
const app = express()

app.use(app)

db = mysql2.query(
    "SELECT * FROM table_name"
)

// Совершенно непомю как правильно писать подключение к БД
//  и делать запросы с параметрами