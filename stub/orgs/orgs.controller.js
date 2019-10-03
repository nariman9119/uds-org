const express = require('express')
const router = express.Router()
const mainService = require('./orgs.service')
const moment = require('moment')


router.get('/getOrgs', async (req, res, next) => {
    try {
        const orgsList = await mainService.getOrgs()

        // convert data from db models to resources
        orgs = orgsList.map(function (data) {
            return {
                id: data.id,
                name: data.name,
                district_id: data.district_id


            }
        });

        return news ? res.json(news) : res.status(404).json({message: 'Организации отсутствуют'})
    } catch (error) {
        next(error)
    }
})

module.exports = router
