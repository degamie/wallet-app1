import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppComponent from './component/AppComponent';

function App() {
    return (
        <Router>
            <AppComponent />
        </Router>
    );
}

export default App;
