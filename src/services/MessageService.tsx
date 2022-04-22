import { ApiConfig as config } from "../config/ApiConfig";
import { HttpClient } from "./HttpClient";

export class MessageService {
    client = new HttpClient();

    public getMessagesForUser(userId: number) {
        return this.client.Get(`${config.baseUrl}/${config.messageService.getForUser}/${userId}`);
    }
}