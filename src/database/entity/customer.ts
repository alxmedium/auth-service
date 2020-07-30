import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customer')
class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default Customer;
