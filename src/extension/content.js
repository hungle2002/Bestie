/* eslint-disable no-undef */
import '../index.css';

// import './build/content.css';
import React from 'react';
import ReactDOM from 'react-dom'; ;

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
        <div
            className="fixed left-0 top-0 bg-slate-600 z-50 w-10 h-10"
            // style={{
            //     position: 'fixed',
            //     height: '200px',
            //     width: '200px',
            //     top: 0,
            //     left: 0,
            //     border: '1px #ccc solid'
            // }}
        >
                Your App injected to DOM correctly!
        </div>
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
