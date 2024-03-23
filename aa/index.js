const express = require('express')
const app = express()
const port = 3000

const html = `<h1><font color = "blue">HELLO WORLD!</font></h1>
              <h1><font color = "blue">HELLO WORLD!</font></h1> `
app.get('/', (req, res) =>
{ 
    res.send(html)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))   