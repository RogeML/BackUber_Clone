const MongoLib = require('../lib/mongo');

class RidesService {
    constructor() {
        this.collection = 'rides';
        this.mongoDB = new MongoLib();
    }
    async getRides() {
        // const query = tags && { tags: { $in : tags}}
        const rides = await this.mongoDB.getAll(this.collection);
        return rides || [];
    } 

    async getRide({ rideId }) {
        const ride = await this.mongoDB.get(this.collection, rideId)
        return ride || {};
    }

    async createRide({ ride }) {
        const createRideId = await this.mongoDB.create(this.collection, ride)
        return createRideId;
    }

    async updateRide({ rideId , ride } = {}) {
        const updateRideId = await this.mongoDB.update(this.collection, rideId, ride)
        return updateRideId;
    }

    async deleteRide({rideId}) {
        const deletedRideId = await this.mongoDB.delete(this.collection, rideId)
        return deletedRideId;
    }
}

module.exports = RidesService;