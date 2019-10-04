const express = require('express');
const router = express.Router();
const orgsService = require('./orgs.service');
//const moment = require('moment')
const authorize = require("../_helpers/authorize");
const Role = require("../_helpers/role");

router.post('/api/organization/updateMainInfo', updateMainInfo);

router.get('/api/organizations', async function getOrgs(req, res, next) {

        try {
            const orgsList = await orgsService.getOrgs();
            return orgsList ? res.json(orgsList) : res.status(404).json({message: 'Организации отсутствуют'})
        } catch (error) {
            next(error)

        }

    }
);

router.get('/api/organization/:url', async function getOrg(req, res, next) {

        try {
            const data = await orgsService.getOrg(req.params.url);
            return data ? res.json(data) : res.status(404).json({message: 'Организация отсутствуют'})
        } catch (error) {
            next(error)

        }

    }
);

async function updateMainInfo(req, res, next) {
    await orgsService
        .updateMainInfo(req.body)
        .then(status => {
            return status
                ? res.json(status)
                : res.status(500).json({ message: "данные не сохранены" });
        })
        .catch(err => next(err));
}


module.exports = router;


