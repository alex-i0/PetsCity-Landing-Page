import fetch from 'isomorphic-unfetch';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { email }: { email: string } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;

        const DATACENTER = API_KEY.split('-')[1];

        // 5. The status of 'subscribed' is equivalent to a double opt-in.
        const data = {
            email_address: email,
            status: 'subscribed'
        };

        // 6. Send a POST request to Mailchimp.
        const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        // 7. Swallow any errors from Mailchimp and return a better error message.
        if (response.status >= 400) {
            return res.status(400).json({
                error: `There was an error subscribing to the newsletter. Shoot us an email at [hello@pets.city] and we'll add you to the list.`
            });
        }
        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};
