import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import './index.css';
import enUS from 'antd/locale/en_US';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ConfigProvider locale={enUS}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
);
