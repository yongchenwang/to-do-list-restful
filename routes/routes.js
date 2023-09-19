let router = require('express').Router();
let TaskModel = require('../models/TaskModel');

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

router.get('/task', function (req, res) {
    TaskModel.find({}).then(function (tasks) {
        res.json({
            code: '0000',
            message: 'Tasks retrieved successfully',
            data: tasks
        });
    }).catch(function (err) {
        res.json({
            code: '0001',
            message: 'Tasks could not be retrieved',
            data: null
        });
    });
});

router.get('/task/:id', function (req, res) {
    let taskID = req.params.id;
    TaskModel.findById(taskID).then(function (task) {
        res.json({
            code: '0000',
            message: 'Task retrieved successfully',
            data: task
        });
    }).catch(function (err) {
        res.json({
            code: '0002',
            message: 'Task could not be found',
            data: null
        });
    });
});

router.post('/task', function (req, res) {
    TaskModel.create(req.body).then(function (task) {
        res.json({
            code: '0000',
            message: 'Task created successfully',
            data: task
        });
    }).catch(function (err) {
        res.json({
            code: '0003',
            message: 'Task could not be created',
            data: null
        });
    });
});

router.put('/task/:id', function (req, res) {
    let taskID = req.params.id;
    TaskModel.updateOne({_id: taskID}, req.body).then(function (result) {
        TaskModel.findById(taskID).then(function (task) {
            res.json({
                code: '0000',
                message: 'Task updated successfully',
                data: task
            });
        }).catch(function (err) {
            res.json({
                code: '0002',
                message: 'Task could not be found',
                data: null
            });
        });
    }).catch(function (err) {
        res.json({
            code: '0004',
            message: 'Task could not be updated',
            data: null
        });
    });
});

router.patch('/task/:id', function (req, res) {
    let taskID = req.params.id;
    TaskModel.updateOne({_id: taskID}, req.body).then(function (result) {
        TaskModel.findById(taskID).then(function (task) {
            res.json({
                code: '0000',
                message: 'Task updated successfully',
                data: task
            });
        }).catch(function (err) {
            res.json({
                code: '0002',
                message: 'Task could not be found',
                data: null
            });
        });
    }).catch(function (err) {
        res.json({
            code: '0004',
            message: 'Task could not be updated',
            data: null
        });
    });
});

router.delete('/task/:id', function (req, res) {
    let taskID = req.params.id;

    TaskModel.deleteOne({_id: taskID}).then(function (task) {
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