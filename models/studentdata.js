
const express = require('express');
const mongose = require('mongoose');

const studentSchema =  mongose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
})

const studentData =  mongose.model("studentData",studentSchema);

module.exports = studentData;
