import { DataSource } from 'typeorm';

export const typeormLoader = async () => {
    const appDataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mypassowrd',
        database: 'mente_sa',   
        synchronize: true,
        logging: true,
    });

    await appDataSource.initialize();
}