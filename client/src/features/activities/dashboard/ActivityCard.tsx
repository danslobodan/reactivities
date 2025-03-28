import {
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Typography,
} from '@mui/material';

export default function ActivityCard({
    activity,
    selectActivity,
}: {
    activity: Activity;
    selectActivity: (id: string) => void;
}) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant='h5'>{activity.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                    {activity.date}
                </Typography>
                <Typography variant='body2'>{activity.description}</Typography>
                <Typography variant='subtitle1'>
                    {activity.city} / {activity.venue}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}
            >
                <Chip label={activity.category} variant='outlined' />
                <Button
                    size='medium'
                    variant='contained'
                    onClick={() => selectActivity(activity.id)}
                >
                    View
                </Button>
            </CardActions>
        </Card>
    );
}
