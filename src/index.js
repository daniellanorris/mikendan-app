import ReactDOM from 'react-dom/client';
import React from 'react';
import Home from '../pages/index.jsx'

const App = () => {
    return (
        <>
        <Home />
        </>
    
        )
    }

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('app');
    if (rootElement) {
      ReactDOM.createRoot(rootElement).render(<App />);
    } else {
      console.error("Target container 'app' not found in the DOM.");
    }
  });

