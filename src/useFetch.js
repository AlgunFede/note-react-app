import { useState, useEffect } from 'react';

const useFetch = (url) => {

const [data, setBlogs] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);


useEffect( () => {

    const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Can\'t reach that request')
                }
                return res.json();
            })
            .then( data => {
                console.log(data)
                setBlogs(data);
                setIsPending(false);
                setError(null)
            })
            .catch((err) => {

                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted')
                } else {
                    setError(err.message)
                    setIsPending(false)
                }
            })
        }, 500)

        return () => abortCont.abort();
    }, [url]);

return { data, isPending, error }

}


export default useFetch; 