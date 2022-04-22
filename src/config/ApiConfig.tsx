export const ApiConfig = {
    baseUrl: "https://localhost:7039",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    messageService: {
        getForUser: "message/user"
    },
    userService: {
        getUser: "user"
    },
    authService: {
        login: "authentication/login",
        register: "authentication/register"
    }
}