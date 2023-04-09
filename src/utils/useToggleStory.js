import { useCallback, useEffect, useState } from 'react';
const useUpdateStory = () => {
    // const [state, setState] = useState({ time, mood });
    // const setStory = useCallback((a = 'morning', b = 'normal') => {
    //     setState(
    //         {
    //             time: a,
    //             mood: b
    //         }
    //     );
    // });
    // return [state, setStory];
    const [state, setState] = useState({
        time: '',
        mood: ''
    });
    const [get, setGet] = useState(false);
    const refresh = () => {
        setGet(value => !value);
    };
    useEffect(() => {
        if (get) {
            const nmood = JSON.parse(window.localStorage.getItem('mood'));
            const ntime = JSON.parse(window.localStorage.getItem('time'));
            setState({ mood: nmood.mood, time: ntime.time });
            setGet(false);
        }
    }
    );
    return [state, refresh];
};
const updateStory = () => {
    // console.log(typeof (res));
    const moods = {
        mood: '1'
    };
    const times = {
        time: '2'
    };
    window.localStorage.setItem('mood', JSON.stringify(moods));
    window.localStorage.setItem('time', JSON.stringify(times));
};
export { updateStory };
export default useUpdateStory;
