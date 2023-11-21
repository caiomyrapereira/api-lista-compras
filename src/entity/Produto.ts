import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Produto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    quantidade: number;
}