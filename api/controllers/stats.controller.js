const db = require("../models");
const Phones = db.phones;
const Contacts = db.contacts;
const Op = db.Sequelize.Op;

exports.calculate = (req, res) => {
    Contacts.count().then(totalContacts => {
        Phones.count().then(totalPhones => {
            Contacts.max('updatedAt').then(lastUpdatedContact => {
                Contacts.min('createdAt').then(oldestContact => {
                    res.send({
                        totalContacts: totalContacts,
                        totalPhones: totalPhones,
                        lastUpdatedContact: lastUpdatedContact,
                        oldestContact: oldestContact
                    });
                });
            });
        });
    });
    
};