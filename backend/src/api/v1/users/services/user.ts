import { ContactService, IContact } from './contact';
import { User, UserRole, Gender, Contact } from '../models';

export interface IUser {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    birthDate: string;
    professionalIdentification?: string;
    isActive: boolean;
    userRole: UserRole;
    gender: Gender;
    contacts: IContact[];
};

export class UserService {

    public static async create(userData: IUser): Promise<User> {
        const { contacts, ...userOnlyData } = userData;
       
        const user = User.create({ ...userOnlyData, isActive: true });
        user.role = UserRole.ADMIN;
        await user.save()
        const contactsList = await Promise.all(await ContactService.createList(contacts, user));

        user.contacts = contactsList;
        console.log(user.contacts);
        return user;
    }

    public static async list(): Promise<User[]> {
        const users: User[] = await User.find();

        return users;
    }

    public static async retrie(id: string): Promise<User|null> {
        const user: User|null = await User.findOneBy({ id });

        return user;
    }
}
