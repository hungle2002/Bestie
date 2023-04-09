/* eslint-disable no-undef */
import '../index.css';

// import './build/content.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import EndDayBox from '../components/endDayBox';
import { createToast } from '../components/toast';

// chrome.tabs.insertCSS({ file: './build/content.js' });

// create a new link element
const link = document.createElement('link');

// set the rel, type, and href attributes
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('build/content.css');

// append the link element to the head of the document
document.head.appendChild(link);

const App = () => {
    const [showEndDayBox, setShowEndDayBox] = useState(false);

    useEffect(() => {
        // const mood = localStorage.getItem('mood');
        // const scenario = localStorage.getItem('scenario');
        // console.log(mood, scenario, '<--');
        // console.log('-->', chrome.storage.local.get(['mood', 'scenario']));
        const init = async () => {
            const data = await chrome.storage.local.get(['mood', 'scenario']);

            if (location.hostname === 'localhost') {
                setTimeout(() => {
                    if (data.scenario === 'start') {
                        createToast('Hello Hung, have a nice day!', () => {
                            window.open('http:localhost:3000/home', '_blank');
                        });
                    } else if (data.scenario === 'end') {
                        createToast('Great, Hung! It\' time to check you day', () => {
                            setShowEndDayBox(true);
                        });
                    }
                }, 2000);
            } else {
                if (data.scenario === 'start') {
                    if (data.mood === 'normal') {
                        console.log('Normal day');
                    } else if (data.mood === 'bad') {
                        console.log('Bad day');
                    }
                } else if (data.scenario === 'end') {
                    setShowEndDayBox(true);
                }
            }
        };

        init();
    }, []);

    return (
        showEndDayBox && <>
            <div
            // eslint-disable-next-line max-len
                className="fixed z-40 left-0 top-0 w-screen h-screen bg-zinc-100 opacity-50 cursor-pointer"
            ></div>
            <div
            // eslint-disable-next-line max-len
                className="fixed left-0 top-0 z-50 w-screen h-screen flex justify-center items-center"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setShowEndDayBox(false);
                    }
                }}
            >
                <EndDayBox></EndDayBox>
            </div>
        </>

    );
};

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'chromeExtensionReactApp');
document.body.appendChild(newDiv);
ReactDOM.render(<App />, newDiv);
console.log('Bestie: Content script');

// Message Listener function
// eslint-disable-next-line no-undef
// chrome.runtime.onMessage.addListener((request, sender, response) => {
//     // If message is injectApp
//     if (request.injectApp) {
//     // Inject our app to DOM and send response
//         injectApp();
//         response({
//             startedExtension: true
//         });
//     }
// });

// function injectApp () {

// }
