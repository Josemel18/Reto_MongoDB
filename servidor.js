const express = require('express');

const mongoose = require('mongoose');

const PersonSchema = require("./models/person.js")

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('público'));

// // Conexion a Base de datos

mongoose.connect("mongodb+srv://Jmdev:Temporal.01@jmcluster.sifv9.mongodb.net/RetoNodeJS?retryWrites=true&w=majority");

// // Operaciones CRUD

router.get('/', (req, res) => {
    res.send("My API's start")
})

router.get('/person', (req, res) => {
    PersonSchema.find(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }

    })
})

router.delete('/person/:id', (req, res) => {
    PersonSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send("Person successfully remove.");
        }

    })
})

router.put('/person/:id', (req, res) => {

    PersonSchema.findByIdAndUpdate(req.params.id, {
        typeIdPerson: req.body.typeId,
        idPerson: req.body.id,
        namePerson: req.body.name,
        lastnamePerson: req.body.lastname,
        addressPerson: req.body.address,
        emailPerson: req.body.email,
        phonePerson: req.body.phone,
        cellphonePerson: req.body.cellphone,
        websitePerson: req.body.website,
        profilePerson: req.body.profile,
    },

        function (err) {

            if (err) {
                console.log(err);
            } else {
                res.send("Person successfully update.");
            }

        })

});

router.patch('/person/:id', (req, res) => {

    PersonSchema.findByIdAndUpdate(req.params.id, {
        typeIdPerson: req.body.typeId,
        idPerson: req.body.id,
        namePerson: req.body.name,
        lastnamePerson: req.body.lastname,
        addressPerson: req.body.address,
        emailPerson: req.body.email,
        phonePerson: req.body.phone,
        cellphonePerson: req.body.cellphone,
        websitePerson: req.body.website,
        profilePerson: req.body.profile,
    },

        function (err) {

            if (err) {
                console.log(err);
            } else {
                res.send("Person successfully update.");
            }

        })

});

router.post('/person', (req, res) => {
    let newPerson = new PersonSchema({
        typeIdPerson: req.body.typeId,
        idPerson: req.body.id,
        namePerson: req.body.name,
        lastnamePerson: req.body.lastname,
        addressPerson: req.body.address,
        emailPerson: req.body.email,
        phonePerson: req.body.phone,
        cellphonePerson: req.body.cellphone,
        websitePerson: req.body.website,
        profilePerson: req.body.profile,
    });

    newPerson.save(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send("Person successfully stored.");
        }
    })
});


app.use(router);
app.listen(3000, () => {
    console.log("Server run in port 3000")
});