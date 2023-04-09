/* eslint-disable max-len */
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import { randInt } from '../utils/math';

export const Toast = ({ message = 'I am waiting for your', callback, close }) => {
    const [countClose, setCountClose] = useState(0);

    let top, right;
    if (countClose === 0) {
        top = '8px';
        right = '8px';
    } else {
        top = randInt(20, window.innerHeight - 350).toString() + 'px';
        right = randInt(20, window.innerWidth - 350).toString() + 'px';
    }
    console.log(top, right, '<--');
    return <motion.div
        style={{
            top,
            right
        }}
        className={'w-[300px] flex flex-col flex-start p-2 fixed z-50 border-2 border-zinc-600 rounded-md bg-white cursor-pointer'}
        onClick={(e) => {
            console.log('Pop up onclick');
            callback();
            close();
        }}
    >
        <div>
            <img className='w-18 h-14' src={'http://localhost:3000/logo-mini.png'}/>
        </div>
        <div className='flex flex-col flex-start gap-2'>
            <p className='text-xl'>{message}</p>
        </div>
        <div
            className='absolute top-1 right-2 cursor-pointer'
            onClick={() => {
                if (countClose === 2) {
                    close();
                } else {
                    setCountClose(x => x + 1);
                }
            }}
        >
            <FontAwesomeIcon icon={faXmark} />
        </div>
    </motion.div>;
};

export const createToast = (message, callback) => {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);

    const handleToastClose = () => {
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
    };

    ReactDOM.render(
        <Toast message={message} close={handleToastClose} callback={callback} />,
        container
    );
};
