import { post } from "../types/postTypes";

const heraTweets : post = {
    name: 'Hera Varela',
    username: 'StardustHera',
    avatar: 'HV',
    body: 'I want ice cream T_T',
    date: new Date(),
}

const valkyrieTweet : post = {
    name: 'Valkyrie',
    username: 'coquetteharpy',
    avatar: 'V',
    body: 'EL OH EL IM IRRITATED',
    date: new Date(),
}

export const mockTimelineData = [heraTweets, valkyrieTweet];