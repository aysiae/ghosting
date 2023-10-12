export type Post = {
    name: string,
    username: string,
    body: string,
    date: Date,
    avatar: string,
    likes?: number,
    reposts?: number,
    responses?: Post[],
}