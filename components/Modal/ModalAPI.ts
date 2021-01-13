import fetch from 'isomorphic-unfetch';

const subscribe = async (setMessage: Dispatch, setStatus: Dispatch, inputReference: React.MutableRefObject<HTMLInputElement>) => {
    const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
            email: inputReference.current.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
        setStatus(false);
        setMessage(error);
    } else if (!error) {
        setStatus(true);
        setMessage('You are now subscribed to our waitlist.🎉');
    }
};

export { subscribe };
