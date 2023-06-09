

const studentData = require('../models/studentdata');
const  route  = require('../router/students');


const createStudent = async (req ,res) => {
    console.log(req.body);
    const newStudent = new studentData({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });

    try {
        await newStudent.save();
       res.status(201).json(newStudent);
    }catch(err){
      res.status(401).json({message : message.err})
    }
}

const updataStudent = async (req ,res) => {
    const _id = req.params._id
    console.log(req.body);
    const newStudent = new studentData({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });

    try {
        await studentData.findOneAndUpdate({
            _id : _id
        },
        {
            name : req.body.name
        }
)
       res.status(201).json({_id : _id});
    }catch(err){
      res.status(401).json({message : message.err})
    }

}

const delteStudent = async (req ,res) => {
    const _id = req.params._id
    console.log(req.body);
    const newStudent = new studentData({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });

    try {
        await studentData.findOneAndDelete({
            _id : _id
        })
       res.status(201).json({_id : _id});
    }catch(err){
      res.status(401).json({message : message.err})
    }

}

const getStudent = async (req ,res) =>{
    try {
        const student = await studentData.find();
        res.status(200).json(student);
    }
    catch(err) {
      res.status(401).json({message : message.err});
    }
}


const getSpefeicdata = async (req ,res) =>{
    const _id = req.params._id
    try {
        const student = await studentData.findOne({_id : _id});
        res.status(200).json(student);
    }
    catch(err) {
      res.status(401).json({message : message.err});
    }
}


module.exports.createStudent = createStudent;
module.exports.getStudent = getStudent;
module.exports.getSpefeicdata = getSpefeicdata;
module.exports.updataStudent = updataStudent;
module.exports.delteStudent = delteStudent;