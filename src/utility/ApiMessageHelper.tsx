import { useAlert } from "react-alert";
import { ResponseMessage } from "../models/ResponseMessage";
import { ResponseStatus } from "../models/ResponseStatus";

export class ApiMessageHelper {
    alert = useAlert();

    public handleIncomingMessage<T>(message: ResponseMessage) {
        let data = message.data as T;

        if (message.status === ResponseStatus.success) {
            if (typeof data === "string") {
                this.alert.success(data);
            }
            return data;
        }
        else {
            this.alert.error(data);
        }
    }
}