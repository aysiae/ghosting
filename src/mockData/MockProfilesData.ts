import { BasicProfileType } from "../types/profileTypes";

const placeholderImg = require("../assets/ghost.png");

export const p1: BasicProfileType = {
  displayName: "Hera Varela",
  username: 'stardusthera',
  avatar: placeholderImg,
};

export const p2: BasicProfileType = {
  displayName: "Valkyrie",
  username: 'coquetteharpy',
  avatar: placeholderImg,
};

export const p3: BasicProfileType = {
  displayName: "Dimitri",
  username: 'pinkgrimreaper'
};

export const mockProfileData = [p1, p2, p3];
