/**
 * Created by guobaoli on 2016/6/11.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/role', function(req, res, next) {
    res.render('index', { title: '权限管理' });
});

router.get('/aaa', function(req, res, next) {
    res.render('index', { title: '权限管理aaa' });
});

module.exports = router;