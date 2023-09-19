let router = require('express').Router();
let TaskModel = require('../models/TaskModel');

// GET /
router.get('/', function (req, res) {
    TaskModel.find({}).then(function (tasks) {
        let openTasks = tasks.filter(function (task) {
            return !task.completed;
        });
        let completedTasks = tasks.filter(function (task) {
            return task.completed;
        });
        res.render('index', {openTasks: openTasks, completedTasks: completedTasks});
    });
});

router.post('/', function (req, res) {
    let newTask = new TaskModel({description: req.body.description});

    newTask.save().then(function (result) {
        console.log(result);
        res.redirect('/');
    }).catch(function (err) {
        console.log(err);
        res.redirect('/');
    });
});

router.patch('/task/:id', function (req, res) {
    let taskID = req.params.id;
    console.log(taskID);
    console.log(req.body);
    TaskModel.updateOne({_id: taskID}, req.body).then(function (result) {
        TaskModel.findById(taskID).then(function (result) {
            res.json({
                code: '0000',
                message: 'Task updated successfully',
                data: result
            });
        }).catch(function (err) {
            res.json({
                code: '0003',
                message: 'Task could not be found',
                data: null
            });
        });
    }).catch(function (err) {
        res.json({
            code: '0002',
            message: 'Task could not be updated',
            data: null
        });
    });
});

router.delete('/task/:id', function (req, res) {
    let taskID = req.params.id;

    TaskModel.deleteOne({_id: taskID}).then(function (result) {
        res.json({
            code: '0000',
            message: 'Task deleted successfully',
            data: {}
        });
    }).catch(function (err) {
        res.json({
            code: '0001',
            message: 'Task could not be deleted',
            data: null
        });
    });
});


module.exports = router;