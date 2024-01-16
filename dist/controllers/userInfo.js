"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redisClient_1 = require("../redisClient/redisClient");
const axios_1 = require("axios");
class User {
    getUserInfo = async (req, res, next) => {
        try {
            let { key } = req.body;
            let cahedPost = await redisClient_1.default.get(key);
            if (cahedPost) {
                // Retrieve cached user information
                return res.status(200).json(JSON.parse(cahedPost));
            }
            key = key.replace('post', '');
            const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${key}`);
            // Store user information in Redis (key, data, duration)
            await redisClient_1.default.set(key, JSON.stringify(response.data), 10);
            return res.status(200).json({ messge: response.data });
        }
        catch (err) {
            return res.status(404).json({ message: err });
        }
    };
    createUserInfo = async (req, res, next) => {
        try {
            const { key, userInfo } = req.body;
            // Store user information in Redis (key, data, duration)
            await redisClient_1.default.set(key, JSON.stringify(userInfo), 100);
            // Retrieve cached user information
            let cachedUserInfo = await redisClient_1.default.get(key);
            if (cachedUserInfo !== null) {
                cachedUserInfo = JSON.parse(cachedUserInfo);
                return res.status(200).json({ message: cachedUserInfo }); // Send the cached user info
            }
            // If user info was not found in cache
            return res.status(200).json({ message: 'User Info is accepted' });
        }
        catch (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).json({ message: 'Internal Server Error' }); // Handle the error gracefully
        }
    };
}
exports.default = new User();
//# sourceMappingURL=userInfo.js.map