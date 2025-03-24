import { Grid2 } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetail from '../details/ActivityDetail';

export default function ActivityDashboard({
    activities,
    selectedActivity,
    selectActivity,
    cancelSelectActivity,
}: {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && (
                    <ActivityDetail
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                    />
                )}
            </Grid2>
        </Grid2>
    );
}
