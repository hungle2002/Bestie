import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../lotties/coming-soon.json';

export default function CommingSoon ({ width = 130, height = 130 }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        renderer: 'svg'
    };
    return <Lottie options={defaultOptions} height={height} width={width} />;
}
