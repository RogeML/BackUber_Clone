const express = require('express');

const UserRidesService = require('../services/userRides');

function userRidesApi(app) {
    const router = express.Router();
    app.use('/api/user-rides', router);

    const userRidesService  = new UserRidesService()

    router.get('/', async function(req, res, next) {
        const { userId } = req.query;

        try {
            const userRides = await userRidesService.getUserRides({userId})
            res.status(200).json({
                data:userRides,
                message: 'User rides listed'
            })
        } catch(error) {
            next(error)
        }
    })

    router.post('/', async function(req, res, next){
        const { body:userRide } = req;

        try {
            const createdUserRideId = await userRidesService.createUserRide(userRide)

            res.status(201).json({
                data: createdUserRideId,
                message: 'user ride created'
            })
        } catch(err) {
            next(err)
        }
    })
}

module.exports = userRidesApi;