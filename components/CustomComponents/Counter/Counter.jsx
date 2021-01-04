import Typography from '../../Typography/Typography';

const appStatistics = [
    {
        title: '✅ Trusted Breeders',
        number: 200,
        monthlyChange: 26
    },
    {
        title: '🐶 Pets Breeds',
        number: 56,
        monthlyChange: 8
    },
    {
        title: '👪 Waitlist Users',
        number: 489,
        monthlyChange: 54
    }
];

const Counter = () => (
    <div className="counter-container">
        <div className="counter-card">
            {appStatistics.map(({ title, number, monthlyChange }, index) => (
                <div className="single-counter" key={index}>
                    <span>
                        <Typography type="text" size="large">
                            {number}
                        </Typography>
                        <Typography>+{monthlyChange}</Typography>
                    </span>
                    <span>This month</span>
                    <Typography type="text" size="large">
                        {title}
                    </Typography>
                </div>
            ))}
        </div>
    </div>
);

export default Counter;
