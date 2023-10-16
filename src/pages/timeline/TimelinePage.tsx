import { Sidebar } from "../../components/sidebar/Sidebar"
import { Timeline } from "../../layouts/Tiemline"

export function TimelinePage() {
    return (
       <div style={{'display': 'flex', 'flexDirection': 'row', width: '100%', height: '100%'}}>
            <Sidebar />
            <Timeline />
       </div>
    )
}