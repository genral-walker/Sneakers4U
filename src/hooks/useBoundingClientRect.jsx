
import React, {useEffect} from 'react';

const useBoundingClientRect = ()=>{

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            const body = document.body.getBoundingClientRect();
            if (body.y <= -35) {
                nav.classList.add('fix');
            } else {
                nav.classList.remove('fix');
            }
        });
    }, []);
};

export default useBoundingClientRect;