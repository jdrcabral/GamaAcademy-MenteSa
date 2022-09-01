import passportJwt from "passport-jwt";
import { UserService } from "../../api/v1/users/services";

const JWT_SECRET = 'hashashfkldfnwi';

const JwtStrategy = passportJwt.Strategy;
const ExtactJwt = passportJwt.ExtractJwt;

const veirfyJwt = async (payload: any, done: passportJwt.VerifiedCallback) => {
    const { email } = payload;
    const user = await UserService.findOneByEmail(email);

    if (user) {
        return done(null, user, payload)
    }

    return done({ error: 'Failed to retrieve user'}, null);
}

const JWTStrategy = new JwtStrategy(
    {
        jwtFromRequest: ExtactJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET,
    },
    veirfyJwt
);

export default JWTStrategy;