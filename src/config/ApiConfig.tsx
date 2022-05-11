export const ApiConfig = {
    baseUrl: "https://localhost:7204",
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
        register: "authentication/register",
        logOut: "authentication/logout"
    }
}