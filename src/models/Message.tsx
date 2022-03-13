export class Message {
    id: number;
    userId: number;
    username: string;
    description: string;
    image: string;
    createdDate: Date
    token: string = "";

    constructor(id: number, userId: number, username: string, description: string, image: string, createdDate: Date) {
        this.id = id;
        this.userId = userId;
        this.username = username;
        this.description = description;
        this.image = image;
        this.createdDate = createdDate;
    }
}