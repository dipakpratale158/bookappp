const path = require('path');
const rootDir = path.dirname(require.main.filename);
const User = require('../models/users');

exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        });
};

exports.getAppointmentPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
};

exports.createUser = (req, res, next) => {
    console.log('reached controller', req.body);
    const { name, phone, email } = req.body;
    User.create({ name, phone, email })
        .then(result => {
            console.log(result);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        });
};

exports.deleteUser = (req, res, next) => {
    const id = req.query.id;
    User.findByPk(id)
        .then(user => {
            if (user) {
                return user.destroy();
            }
        })
        .then(result => {
            console.log('User deleted');
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        });
};

exports.updateUser = (req, res, next) => {
    const { id, name, phone, email } = req.body;
    User.findByPk(id)
        .then(user => {
            if (user) {
                user.name = name;
                user.phone = phone;
                user.email = email;
                return user.save();
            }
        })
        .then(result => {
            console.log('User updated');
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        });
};