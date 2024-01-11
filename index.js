const port = 5000
const http = require('http')
const express = require('express');
const host = "localhost"
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// app.use((req, res, next)=>{
//     console.log(req.headers)
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>')
// });
const server = http.createServer(app);

app.all('/blackpink', (req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
app.get('/blackpink', (req, res) => {
    res.end('Hien thi danh sach cac thanh vien cua blackpink');
})
app.post('/blackpink', (req, res, next) => {
    res.end('Hien thi danh sach cac thanh vien cua blackpink co ten' + req.body.name + 'quoc tich:' + req.body.nation);
    // res.end(`Ten thanh vien, ${req.body.name}`);
});

app.put('/blackpink', (req, res) => {
    res.statusCode = 200
    res.end('Not Supported!!!')
})

app.delete('/blackpink', (req, res) => {
    res.end('Blackpink giai tan')
})

app.get('/blackpink/:blackpinkID', (req, res) => {
    res.end('Day la thong tin cua: ' + req.params.blackpinkID);
})
app.post('/blackpink/:blackpinkID', (req, res) => {
    res.end('Zoro da o day')
})
app.put('/blackpink/:blackpinkID', (req, res) => {
    res.write('Cap nhat thong tin cho: ' + req.params.blackpinkID + '\n')
    res.end('Da doi ten la: ' + req.body.name + 'va quoc tich' + req.body.nation)
})
app.delete('/blackpink/:blackpinkID', (req, res) => {
   res.end('Ca si ' + req.params.blackpinkID+ ' da ra solo')
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);

});