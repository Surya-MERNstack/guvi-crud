const express = require('express');
const mongoose = require('mongoose');


const studentActions = require('../controller/student');

const router = express.Router();

router.post('/',studentActions.createStudent);

router.get('/',studentActions.getStudent);

router.get('/:_id',studentActions.getSpefeicdata);

router.put('/:_id',studentActions.updataStudent);

router.delete('/:_id', studentActions.delteStudent);
module.exports = router;