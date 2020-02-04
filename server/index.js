const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//Database	
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("../database.sqlite", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.prepare().then(() => {
    const server = express()

    server.get('/api/v0/getdata/:id', (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')

        //res.json({ success: true, id: req.params.id })
        res.end(JSON.stringify(require("../tescoData.json")))
    })
    server.get('/api/v1/getdata/:id', (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')

        let main = () => {
            db.get("SELECT * FROM ? ORDER BY RANDOM() LIMIT 1;", ["tesco_main"], (err, row) => {
                if (err) {
                    return console.log(err.message)
                } else {
                    console.log(row)
                    return (row)
                }
            })
        }

        res.json({ success: true, id: req.params.id, data: main })
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
