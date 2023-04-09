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
    const [scenario, setScenario] = useState('start');
    const [mood, setMood] = useState('normal');

    return (
        <div className="h-[600px] w-[400px] bg-pink-200">
            <h1>Hello world</h1>
            <div>
                <h1 className="text-md font-bold">Scenario</h1>
                <div>
                    <div>
                        <input type="radio" name="Start of day" onClick={() => {
                            setScenario('start');
                        }} checked={scenario === 'start'} /> Start
                    </div>
                    {scenario === 'start' && <div>
                        <div>
                            <input type="radio" name="Normal day" onClick={() => {
                                setMood('normal');
                            }} checked={mood === 'normal'} /> Normal day
                        </div>
                        <div>
                            <input type="radio" name="Bad day" onClick={() => {
                                setMood('bad');
                            }} checked={mood === 'bad'} /> Bad day
                        </div>
                    </div>}
                    <div>
                        <input type="radio" value="End of day" onClick={() => {
                            setScenario('end');
                        }} checked={scenario === 'end'}/> End
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                    chrome.storage.sync.set({ scenario, mood });
                }}
                className='p-4 bg-pink-600 text-white font-medium rounded-md'
            >Set scenario</button>
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
