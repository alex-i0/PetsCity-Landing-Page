import fetch from 'isomorphic-unfetch';
import { SetStateAction } from 'react';

const subscribe = async (
    setMessage: React.Dispatch<SetStateAction<string>>,
    setStatus: React.Dispatch<SetStateAction<boolean>>,
    inputReference: React.MutableRefObject<HTMLInputElement>
): Promise<void> => {
    const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
            email: inputReference.current.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });

    const { error }: { error: 'string' } = await res.json();

    console.log(typeof setMessage);

    if (error) {
        setStatus(false);
        setMessage(error);
    } else if (!error) {
        setStatus(true);
        setMessage('You are now subscribed to our waitlist.🎉');
    }
};

export { subscribe };
