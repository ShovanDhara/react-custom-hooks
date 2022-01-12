import React from 'react';

function useClickOutside(elRef, callback) {

    const callbackRef = React.useRef();
    callbackRef.current = callback;

    React.useEffect(() => {
        const handleClickOutside = e => {
            // For clicked inside
            if (elRef?.current?.contains(e.target) && callbackRef.current) {
                callbackRef.current(e);
            }
            // For clicked outside [Disabled because on every click it will trigger]
            // if (!elRef?.current?.contains(e.target) && callbackRef.current) {
            //     callbackRef.current(e);
            // }
        }
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }

    }, [callbackRef, elRef])
}

export default useClickOutside;