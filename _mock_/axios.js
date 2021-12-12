const { mockData } = require("./mockFollower")
module.exports = {
    get:jest.fn().mockResolvedValue(mockData)
}