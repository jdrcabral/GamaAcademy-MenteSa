import mongoose from 'mongoose';

export const mongooseLoader = async () => {
    await mongoose.connect('mongodb://root@example@localhost:27017/mente_sa');
}