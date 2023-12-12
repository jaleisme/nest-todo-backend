import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users as User } from "src/components/users/entities/user.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    task_name: string;

    @Column({ length: 100 })
    description: string;

    @Column()
    is_done: boolean;

    @Column()
    user_id: number
}
