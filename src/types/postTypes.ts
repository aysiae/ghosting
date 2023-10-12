export type post = {
    name: string,
    username: string,
    body: string,
    date: Date,
    avatar: string,
    likes?: number,
    reposts?: number,
    responses?: post[],
}