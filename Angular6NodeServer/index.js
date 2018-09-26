const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var port = process.env.PORT || 1234;
var router = express.Router();
var Person = require('./app/models/person');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/people");

app.use(function(req, res, next) {
    console.log("A request is came at the server");
    next();
});

router.post('/', function(req, res) {
    res.json({ message: 'Hi-Oh client' });
});

router.route('/person')
    .post(function(req, res) {
        var person = new Person();
        person.id = req.body.id;
        person.name = req.body.name;
        person.surname = req.body.surname;

        person.save(function(err) {
            if(err) 
                res.send(err);
            
            res.json({ message: "Person created" });
        });
    })

    .get(function(req, res) {
        Person.find(function(err, people) {
            if(err) 
                res.send(err);
            res.json(people)
        });
    });

router.route('/person/:person_id')
    .get(function(req, res) {
        Person.find({ id: req.params.person_id }, function(err, person){
            if(err)
                res.send(err);
            res.json(person)
        });
    });

app.use('/api', router);
app.listen(port);
console.log("server's up on " + port);