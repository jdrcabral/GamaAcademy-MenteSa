import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn
} from "typeorm";

import { hashPassword, verifyPassword } from '../../../utils/common/passwordHasher';

export enum UserRole {
    ADMIN = "admin",
    PROFESSIONAL = "professional",
    PATIENT = "patient",
}

export enum Gender {
    MALE,
    FEMALE,
    NON_BINARY,
    OTHER,
}

export enum ContactType {
    PHONE,
    EMAIL,
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar")
    name!: string;

    @Column("varchar")
    email!: string;

    @Column("varchar")
    cpf!: string;

    @Column("date")
    birthDate!: Date;

    @Column({
        type: "varchar",
        nullable: true,
    })
    professionalIdentification!: string;

    @Column("varchar")
    password!: string;

    @Column("bool")
    isActive!: boolean

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.PATIENT,
    })
    role!: UserRole;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.OTHER,
    })
    gender!: Gender;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts!: Contact[]

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    hashUserPassword() {
        this.password = hashPassword(this.password);
    }

    matchUserPassword(password: string) {
        return verifyPassword(password, this.password);
    }

}

@Entity()
export class Contact extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({
        type: "enum",
        enum: ContactType,
        default: ContactType.PHONE,
    })
    type!: ContactType;

    @Column("varchar")
    contact!: string;

    @ManyToOne(() => User, (user) => user.contacts)
    user!: User;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}