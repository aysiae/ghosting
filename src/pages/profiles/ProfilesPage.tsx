import { useState } from "react"
import { mockProfileData } from "../../mockData/MockProfilesData"

export function ProfilesPage() {
    // takes state all the user created profiles and displays them as tiles to select (like netflix) 
    const [allProfiles, setAllProfiles] = useState(mockProfileData);

    
    return (
        <div>
        </div>
    )
}