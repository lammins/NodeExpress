const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const html = `<h1><font color = "blue">HELLO WORLD!</font></h1>
              <h1><font color = "blue">HELLO WORLD!</font></h1> `;

app.get('/', (req, res) =>
{ 
    res.sendFile(path.join(__dirname,`public/home.html`))
})
app.get('/home', (req, res) =>
{ 
    res.send('<h1><font color = "pink">this is home page</font></h1>')
})
app.get('/about', (req, res) =>
{ 
    res.send('<h1><font color = "pink">this is about page</font></h1>')
})
app.get('/contact', (req, res) =>
{ 
    res.send('<h1><font color = "pink">this is contact page</font></h1>')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))       