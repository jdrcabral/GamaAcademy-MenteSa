import passport from 'passport';
import JwtStrategy from '../utils/authentication/jwtStrategy';

export const passportLoader = () => {
    passport.use(JwtStrategy);
}