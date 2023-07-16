import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export abstract class User {

    @PrimaryGeneratedColumn()  //자동으로 생성되는 primary key
    id: number

    @Column()
    user_id: string

    @Column()
    user_pw: number
}

@Entity()
export class User_info extends User{
    
    @Column()
    name:string

    @Column()
    email:string

    @Column()
    phonenumber:number

}
