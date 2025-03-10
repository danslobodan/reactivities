import { Grid2 } from '@mui/material';
import ActivityList from './ActivityList';

export default function ActivityDashboard({
    activities,
}: {
    activities: Activity[];
}) {
    return (
        <Grid2 container>
            <Grid2 size={9}>
                <ActivityList activities={activities} />
            </Grid2>
        </Grid2>
    );
}
