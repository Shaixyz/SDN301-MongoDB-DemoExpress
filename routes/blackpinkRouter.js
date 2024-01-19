const express = require('express')
const bpRouter = express.Router()
bpRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})
.get((req, res) => {
    res.end('Hien thi danh sach cac thanh vien cua blackpink');
})
.post((req, res, next) => {
    res.end('Hien thi danh sach cac thanh vien cua blackpink co ten' + req.body.name + 'quoc tich:' + req.body.nation);
})
.put( (req, res) => {
    res.statusCode = 403
    res.end('Not Supported!!!')
})
.delete((req, res) => {
    res.end('Blackpink giai tan')
})



bpRouter.route('/:blackpinkID')

.get( (req, res) => {
    res.end('Day la thong tin cua: ' + req.params.blackpinkID);
})
.post( (req, res) => {
    res.end('Zoro da o day')
})
.put( (req, res) => {
    res.write('Cap nhat thong tin cho: ' + req.params.blackpinkID + '\n')
    res.end('Da doi ten la: ' + req.body.name + ' va quoc tich ' + req.body.nation)
})
.delete( (req, res) => {
   res.end('Ca si ' + req.params.blackpinkID+ ' da ra solo')
})
module.exports = bpRouter