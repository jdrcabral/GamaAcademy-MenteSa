import { DataSource } from 'typeorm';
import path from 'path';

export const typeormLoader = async () => {
    const appDataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mypassowrd',
        database: 'mente_sa',   
        entities: [
            path.resolve(__dirname, '..', 'api', 'v1', 'sessions', 'models.ts'),
            path.resolve(__dirname, '..', 'api', 'v1', 'users', 'models.ts'),
        ],
        synchronize: true,
        logging: false,
    });

    await appDataSource.initialize();
}