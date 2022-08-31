import jwt from 'jsonwebtoken';
import { User } from '../../api/v1/users/models';

export const createToken = (user: User): string => {
    const payloadData = {
        email: user.email,
        id: user.id,
    }
    const token = jwt.sign(payloadData, 'secrep', { expiresIn: '1d'});

    return token;
}

export const verifyToken = (token: string): User => {
    const payload = jwt.verify(token, 'secret') as any;
    const user = {
        email: payload.email,
        id: payload.id,
    };

    return user as User;
}