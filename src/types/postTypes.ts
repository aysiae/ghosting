export type PostType = {
  name: string;
  username: string;
  body: string;
  date?: string;
  avatar: string;
  likes?: number;
  reposts?: number;
  responses?: PostType[];
};
