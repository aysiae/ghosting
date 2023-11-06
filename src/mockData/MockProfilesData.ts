import { BasicProfileType } from "../types/profileTypes";

const placeholderImg = require("../assets/ghost.png");

const p1: BasicProfileType = {
  displayName: "Profile 1",
  avatar: placeholderImg,
};

const p2: BasicProfileType = {
  displayName: "Profile 2",
  avatar: placeholderImg,
};

const p3: BasicProfileType = {
  displayName: "Profile 3",
};

export const mockProfileData = [p1, p2, p3];
