import { redisClient } from '../../loaders/redisLoader';

export class Cache {
    static async set(key: string, value: any) {
        await redisClient.set(key, value);
    }

    static async get(key: string): Promise<any> {
        const value = await redisClient.get(key);

        return value;
    }
}