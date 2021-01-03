import Typography from '../../Typography/Typography';

const appStatistics = [
    {
        title: 'Breeders',
        number: 200,
        monthlyChange: 26
    },
    {
        title: 'Pets Types',
        number: 56,
        monthlyChange: 8
    },
    {
        title: 'Waitlist Users',
        number: 489,
        monthlyChange: 54
    }
];

const Counter = () => (
    <div className="counter-container">
        <div className="counter-card">
            {appStatistics.map((statistic) => (
                <div className="single-counter">
                    <Typography type="text" size="large">
                        {statistic.number}
                    </Typography>
                    <span>This month</span>
                </div>
            ))}
        </div>
    </div>
);

export default Counter;
