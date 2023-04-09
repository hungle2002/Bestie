/* eslint-disable no-undef */
import '../index.css';

// import './build/content.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
    return (
        <div className="h-[600px] w-[400px] bg-pink-200">
            <h1>Hello world</h1>
        </div>

    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

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
//     const newDiv = document.createElement('div');
//     newDiv.setAttribute('id', 'chromeExtensionReactApp');
//     document.body.appendChild(newDiv);
//     ReactDOM.render(<App />, newDiv);
//     console.log('Bestie: Content script');
// }
