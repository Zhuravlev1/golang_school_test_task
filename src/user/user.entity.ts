import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../shared';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique: true})
  email: string;
}
