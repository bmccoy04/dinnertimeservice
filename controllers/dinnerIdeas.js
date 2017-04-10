var fs = require('fs');
var _ = require('lodash');

var file = __dirname + "/../data/dinnerIdeas.json";

exports.get = function (req, res) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        res.json(obj);
    });
}

exports.post = function (req, res) {
    var name = req.body.name;
    if(name === null || name === undefined)
        throw 'Invalid Object';
    
    fs.readFile(file, 'utf8', function(err, data){
        if(err) throw err;
        var obj = JSON.parse(data);
        var top = _.orderBy(obj, ['id'], 'asc')[obj.length - 1];
        console.log(top);
        var newObj = {id: top.id + 1, name: name};
        console.log(newObj);
        obj.push(newObj);
        fs.writeFile(file, JSON.stringify(obj), 'utf8',function(err, data){
            if(err) throw err;
            res.json(newObj);
        });
    });
}



exports.getById = function (req, res) {
    fs.readFile(__dirname + "/../data/dinnerIdeas.json", 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        var retVal = _.find(obj, function(d){
            return Number(d.id) === Number(req.params.id);
        });
        res.json(retVal);
    });
    
}

exports.delete = function(req, res){
    fs.readFile(file, 'utf8', function(err, data){
        if(err) throw err;
        var obj = JSON.parse(data);
        var guy = _.find(obj, function(d){
            return obj.id === req.params.id;
        })
        var index = obj.indexOf(guy);
        obj.splice(index, 1);
        fs.writeFile(file, JSON.stringify(obj), 'utf8',function(err, data){
            if(err) throw err;
            res.json({message: "success"});
        });
    });
}
