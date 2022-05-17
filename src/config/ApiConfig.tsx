export const ApiConfig = {
    //baseUrl: "https:localhost:7204",
    baseUrl: "http://172.16.1.3/api",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    messageService: {
        getForUser: "message/user/?userId=",
        getUserFeed: "message/user/feed/",
        createMessage: "message",
        deleteMessage: "message",
        getFeed: "message/feed"
    },
    userService: {
        getUser: "user/?username=",
        getUserById: "user/?userId=",
        getUserFollowers: "user/followers/?userId=",
        getUserFollowing: "user/following/?userId=",
        updateUser: "user",
        followUser: "user/follow/?userId=",
    },
    authService: {
        login: "authentication/login",
        register: "authentication/Register",
        logOut: "authentication/logout"
    }
}