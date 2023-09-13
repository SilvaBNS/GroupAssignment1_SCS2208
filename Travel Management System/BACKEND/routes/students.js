const router = require("express").Router();
let student = require("../models/student");


router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new student({
        name,
        age,
        gender
    })

    newStudent.save().then(() => {
        res.json("Student Added");
    }).catch((err) => {
        console.log(err);
    })
});


router.route("/").get((req,res) => {
    student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    })
});


router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
      
});


module.exports = router;