import { Sidebar } from "../../components/sidebar/Sidebar"
import { Timeline } from "../../layouts/Tiemline"

export function TimelinePage() {
    return (
       <div style={{'display': 'flex', 'flexDirection': 'row'}}>
            <Sidebar />
            <Timeline />
       </div>
    )
}