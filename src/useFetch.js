import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {

const [data, setBlogs] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);


    useEffect( () => {

        const token = window.localStorage.getItem('loggedTaskAppUser');
        const abortCont = new AbortController();

        const config = {
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`
            }
        }

        fetch(url, config)
            .then(res => {
                console.log('PRIMER THEN', res)
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


        }, [url]);

    return { data, isPending, error }

}


export default useFetch; 