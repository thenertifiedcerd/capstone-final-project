const mongoose = require('mongoose');
const mongoURI =  "mongodb://root:Lpwx6dvw8MBo7NDzm7c7Z1em@172.21.181.104:27017";
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