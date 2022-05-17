import { ApiConfig as config } from "../config/ApiConfig";
import { Message } from "../models/Message";
import { ResponseMessage } from "../models/ResponseMessage";
import { ApiMessageHelper } from "../utility/ApiMessageHelper";
import { HttpClient } from "./HttpClient";

export class MessageService {
    private helper = new ApiMessageHelper();
    private client = new HttpClient();

    public getMessagesForUser(userId: string) {
        return this.client.Get(`${config.baseUrl}/${config.messageService.getForUser}${userId}`)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let messages = this.helper.handleIncomingMessage<Message[]>(response);
                    if (messages) {
                        return messages;
                    }
                    else {
                        return false;
                    }
                }
            });
    }

    public CreateMessage(body: {}) {
        return this.client.Post(`${config.baseUrl}/${config.messageService.createMessage}`, body)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let result = this.helper.handleIncomingMessage<Message>(response);
                    if (result) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            });
    }

    public getFeed() {
        return this.client.Get(`${config.baseUrl}/${config.messageService.getFeed}`)
            .then((data) => {
                if (data) {
                    let response = data as ResponseMessage;
                    let messages = this.helper.handleIncomingMessage<Message[]>(response);
                    if (messages) {
                        return messages;
                    }
                    else {
                        return false;
                    }
                }
            });
    }
}