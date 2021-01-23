
import React, { useEffect, useState } from 'react';

const useFetch =  (shoe) => {

    const [state, setState] = useState({});

    useEffect(() => {

        const getShoes = async () => {
            try {
                const res = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${shoe}`);
                const items = await res.json();

                const arr = [];
                for (let i = 0; i < 8; i++) {
                    const randNum = Math.floor(Math.random() * 99);
                    arr.push(items.results[randNum])
                }

                setState(arr);

            } catch (error) {
                console.log(error)
            }
        };
        getShoes(shoe);

    }, [shoe]);
    return state;
};

export default useFetch;
