import { 
    Entity, PrimaryGeneratedColumn, BaseEntity, Column,
    ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn
} from "typeorm";

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

    @Column("varchar")
    professionalIdentification!: string;

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
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
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
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}