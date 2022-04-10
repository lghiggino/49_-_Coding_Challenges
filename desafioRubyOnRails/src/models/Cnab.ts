import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('cnab')
export default class Cnab {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    transactionTypeCode: string;

    @Column()
    date: string;

    @Column()
    value: number;

    @Column({
        length: 11,
        unique: true,
    })
    cpf: string;

    @Column({
        length: 16,
    })
    cardNumber: string;

    @Column()
    hour: string;

    @Column({
        unique: true,
    })
    storeOwnerName: string;

    @Column({
        unique: true,
    })
    storeName: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_At' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_At' })
    deletedAt: Date;
}
