import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

export const redisLoader = async () => {
    await client.connect();
}

export const redisClient = client;
