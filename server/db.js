const mongoose = require('mongoose');
const mongoURI =  "mongodb://root:EN3vH9WHkd92j1B5Djg9zSGh@172.21.63.75:27017";
mongoose.set('strictQuery', false);
const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 5;
    const count = retryCount ?? 0;
    try {
        await mongoose.connect(mongoURI, { dbName: 'stayhealthybeta1'});
        console.info('Connected to Mongo Successfully')

        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`)

        return await connectToMongo(nextRetryCount);

    }
};

module.exports = connectToMongo;