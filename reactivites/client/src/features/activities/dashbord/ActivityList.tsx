import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activites: Activity[]
    selectActivity: (id: string) =>void
}

export default function ActivityList({activites, selectActivity} : Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {activites.map(activite => (
            <ActivityCard key={activite.id} activity={activite} selectActivity={selectActivity}/>
        ))}
    </Box>
  )
}
