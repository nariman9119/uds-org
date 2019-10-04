const express = require('express');
const router = express.Router();
const mainService = require('./orgs.service');
//const moment = require('moment')


router.get('/api/organizations', async function getOrgs(req, res, next) {

        try {
            const orgsList = await mainService.getOrgs()
            // convert data from db models to resources
            // orgs = orgsList.map(function (data) {
            //     return {
            //         id: data.id,
            //         name: data.name,
            //         district_id: data.district_id
            //     }
            // });
            // console.log(4444)
            return orgsList ? res.json(orgsList) : res.status(404).json({message: 'Организации отсутствуют'})
        } catch (error) {
            next(error)

        }

    }
);

module.exports = router;


