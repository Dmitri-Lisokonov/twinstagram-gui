export const ApiConfig = {
    baseUrl: "http://172.16.1.3/api",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    messageService: {
        getForUser: "message/user/?userId=",
        createMessage: "message",
        deleteMessage: "message",
        getFeed: "message/feed"
    },
    userService: {
        getUser: "user/?username=",
        getUserFollowers: "user/followers",
        getUserFollowing: "user/following",
        updateUser: "user",
        followUser: "user/follow",
    },
    authService: {
        login: "authentication/login",
        register: "authentication/Register",
        logOut: "authentication/logout"
    }
}