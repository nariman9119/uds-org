const express = require('express');
const router = express.Router();
const mainService = require('./orgs.service');
//const moment = require('moment')
const authorize = require("../_helpers/authorize");
const Role = require("../_helpers/role");

router.get('/api/organizations', async function getOrgs(req, res, next) {

        try {
            const orgsList = await mainService.getOrgs()
            return orgsList ? res.json(orgsList) : res.status(404).json({message: 'Организации отсутствуют'})
        } catch (error) {
            next(error)

        }

    }
);

router.get('/api/organizations/:url', async function getOrg(req, res, next) {

        try {
            const data = await mainService.getOrg()
            return data ? res.json(data) : res.status(404).json({message: 'Организация отсутствуют'})
        } catch (error) {
            next(error)

        }

    }
);
module.exports = router;


