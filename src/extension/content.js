/* eslint-disable no-undef */
import '../index.css';

// import './build/content.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import EndDayBox from '../components/endDayBox';

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
    const [showEndDayBox, setShowEndDayBox] = useState(true);

    return (
        showEndDayBox && <>
            <div
            // eslint-disable-next-line max-len
                className="fixed z-40  left-0 top-0 w-screen h-screen bg-zinc-100 opacity-50"
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
// Message Listener function
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((request, sender, response) => {
    // If message is injectApp
    if (request.injectApp) {
    // Inject our app to DOM and send response
        injectApp();
        response({
            startedExtension: true
        });
    }
});

function injectApp () {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'chromeExtensionReactApp');
    document.body.appendChild(newDiv);
    ReactDOM.render(<App />, newDiv);
    console.log('Bestie: Content script');
}
