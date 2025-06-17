import { Box, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "./details/ActivityDetail";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) =>void
    cancelSelectActivity: () =>void
    selectedActivity?: Activity
}

export default function ActivityDashbord({activities, selectActivity, cancelSelectActivity, selectedActivity}: Props) {
  return (
    <Grid container spacing={3}>
        <Grid size={7}>
            <ActivityList 
              activites={activities} 
              selectActivity={selectActivity}
            />
        </Grid>
        <Grid size={5} >
          <Box sx={{ position: 'sticky', top: 16 }}>
            {selectedActivity && 
              <ActivityDetail 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity} 
              />}
            </Box>
        </Grid>
    </Grid>
  )
}
