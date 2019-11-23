const MongoLib = require('../lib/mongo');

class UserRidesService {
    constructor() {
        this.collection = 'user-rides';
        this.mongoDB = new MongoLib();
    }

    async getUserRides({ userId}) {
        const query = userId && { userId };
        const userRides = await this.mongoDB.getAll(this.collection, query)

        return userRides || []
    }

    async createUserRide({ userRide }) {
        const cretaedUserRideId = await this.mongoDB.create(this.collection, userRide)
        return cretaedUserRideId
    }

    async deleteUserRide({ userRideId }) {
        const deletedUserRideId = await this.mongoDB.create(this.collection, userRideId)
        return deletedUserRideId
    }
}

module.exports = UserRidesService;