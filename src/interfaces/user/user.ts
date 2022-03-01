import { UserAuthority } from "@prisma/client";
import { CAuthority } from "../authority";

export default interface IUser {
    id: string | null;
    name: string | null;
    email: string | null;
    login: string | null;
    avatar: string | null;
    authorities: UserAuthority[] | CAuthority | null;
}

export class CUser implements IUser {
    id: string | null;
    name: string | null;
    email: string | null;
    login: string | null;
    avatar: string | null;
    authorities: UserAuthority[] | CAuthority | null;

    constructor(user: IUser | any) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.login = user.login;
        this.avatar = user.avatar;
        if(user.authorities){
            this.authorities = user.authorities.map((authority:any) => {
                return new CAuthority(authority);
            });
        }else{
            this.authorities = [];
        }
    }
}