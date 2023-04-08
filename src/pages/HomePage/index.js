import { motion } from 'framer-motion';

import ChartBox from '../../components/chart';
import Quote from '../../components/quote';
function HomePage () {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    return (
        <div className="justify-center">
            <motion.div
                className="w-20 h-20 bg-red-600"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ['20%', '20%', '50%', '50%', '20%']
                }}
            />
            <Quote/>
            <ChartBox/>
        </div>
    );
}

export default HomePage;
