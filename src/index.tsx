import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import 'antd/dist/antd.min.css';
import store from '../src/redux/store'
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

