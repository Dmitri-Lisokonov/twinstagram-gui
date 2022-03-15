export class User {
    id: number;
    username: string;
    password: string = "";
    token: string = "";
    name: string;
    bio: string;
    profileImage: string = ""

    constructor(id: number, username: string, password: string, token: string, name: string, bio: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.token = token;
        this.name = name;
        this.bio = bio;
    }
}