const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    const phone = {
        name: req.body.name,
        number: req.body.number,
        contactId: parseInt(req.params.contactId)
    };

    Phones.create(phone)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred"
            });
        });
};

// Get all phones
exports.findAll = (req, res) => {

    Phones.findAll({
        where: {
            contactId: parseInt(req.params.contactId)
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one phone by id
exports.findOne = (req, res) => {
    Phones.findOne({
        where: {
            contactId: req.params.contactId,
            id: req.params.phoneId
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Update one phone by id
exports.update = (req, res) => {
    const id = req.params.phoneId;

    Phones.update(req.body, {
        where: { id: id, contactId: req.params.contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Phone was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Phone`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Phone with id=" + id
        });
    });
};

// Delete one phone by id
exports.delete = (req, res) => {
    const id = req.params.phoneId;

    Phones.destroy({
        where: { id: id, contactId: req.params.contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Phone was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Phone`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Phone with id=" + id
        });
    });
};