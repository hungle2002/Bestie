import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <div
                className="fixed left-10 top-4 bg-slate-600 z-50 w-10 h-10"
            >
                Your App injected to DOM correctly!
            </div>
        );
    }
}

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
