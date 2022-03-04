import prismaClient from '../../prisma';
import {sign} from 'jsonwebtoken';
import {compare} from 'bcryptjs';

interface AuthRequestBody {
    email: string;
    password: string;
}

export class AuthService {
    async authenticate({email, password}: AuthRequestBody) {
        if (!email || !password) {
            // throw new SError('teste', 400, false, 'email or password is missing');
            throw new Error('email or password is missing');
        }
        const user = await prismaClient.user.findFirst({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('User not found');
        }
        const token = sign({userId: user.id}, process.env.JWT_SECRET as string, {expiresIn: '1d'});

        return {user, token};

        // verify(user.password, process.env.JWT_SECRET,(err, decoded) => {

        // }));
    }
}