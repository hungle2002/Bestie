import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../lotties/time-table.json';

export default function TimeTable ({ width = 130, height = 130 }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        renderer: 'svg'
    };
    return <Lottie options={defaultOptions} height={height} width={width} />;
}
