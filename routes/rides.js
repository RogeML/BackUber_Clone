const express = require('express');
function ridesApi(app) {
    const router = express.Router();
    app.use('/api/rides', router);
    router.get('/', async function(req, res, next) {
        try {
            const rides = await Promise.resolve([{ride:'example'}]);
            res.status(200).json({
                data: rides,
                message: 'rides listed'
            })
        } catch(err) {
            next(err)
        }
    })
    router.get('/:rideId', async function(req, res, next) {
        try {
            const createRideId = await Promise.resolve([{id:'1'}]);
            res.status(200).json({
                data: createRideId,
                message: 'ride listed'
            })
        } catch(err) {
            next(err)
        }
    })
    router.post('/', async function(req, res, next) {
        try {
            const rides = await Promise.resolve([{ride:'1'}]);
            res.status(201).json({
                data: rides,
                message: 'ride created'
            })
        } catch(err) {
            next(err)
        }
    })
    router.put('/:movieId', async function(req, res, next) {
        try {
            const updatedRideId = await Promise.resolve([{id:'1'}]);
            res.status(200).json({
                data: updatedRideId,
                message: 'ride listed'
            })
        } catch(err) {
            next(err)
        }
    })
    router.delete('/:movieId', async function(req, res, next) {
        try {
            const deletedRideId = await Promise.resolve([{id:'1'}]);
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