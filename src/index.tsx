import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IssueProvider } from './context/IssueContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IssueProvider>
        <App />
      </IssueProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
