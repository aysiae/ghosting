import { mockProfileData } from "../../mockData/MockProfilesData";
import { getCookie } from "../../utils";
import { BasicProfileType } from "../../types/profileTypes";

const emptyProfile: BasicProfileType = {
    username: '',
    displayName: '',
}

export function getProfileDetails(): BasicProfileType {
    const username = getCookie('active_profile');
    if (username) {
        const data = mockProfileData.filter((profile) => profile.username === username)
        return data[0];
    }
    return emptyProfile;
}