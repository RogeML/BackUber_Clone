const express = require('express');
const RidesService = require('../services/rides')

function ridesApi(app) {
    const router = express.Router();
    app.use('/api/rides', router);

    const ridesService = new RidesService();

    router.get('/', async function(req, res, next) {
        try {
            const rides = await ridesService.getRides();
            res.status(200).json({
                data: rides,
                message: 'rides listed'
            })
        } catch(err) {
            next(err)
        }
    })
    router.get('/:rideId', async function(req, res, next) {
        const { rideId } = req.params;
        try {
            const createRideId = await ridesService.getRide({ rideId });
            res.status(200).json({
                data: createRideId,
                message: 'ride listed'
            })
        } catch(err) {
            next(err)
        }
    })
    router.post('/', async function(req, res, next) {
        console.log('==================>', req)
        const { body: ride } = req
        try {
            const rides = await ridesService.createRide({ride});
            res.status(201).json({
                data: rides,
                message: 'ride created'
            })
        } catch(err) {
            next(err)
        }
    })
    router.put('/:rideId', async function(req, res, next) {
        const { rideId } = req.params;
        const { body: ride } = req
        try {
            const updatedRideId = await ridesService.updateRide({
                rideId,
                ride
            });
            res.status(200).json({
                data: updatedRideId,
                message: 'ride listed'
            })
        } catch(err) {
            next(err)
        }
    })
    router.delete('/:rideId', async function(req, res, next) {
        const { rideId } = req.params;
        try {
            const deletedRideId = await ridesService.deleteRide({ rideId });
            res.status(200).json({
                data: deletedRideId,
                message: 'ride listed'
            })
        } catch(err) {
            next(err)
        }
    })
}
module.exports = ridesApi;