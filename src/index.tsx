import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import 'antd/dist/antd.min.css';
import store from '../src/redux/store';
import {Provider} from "react-redux";
import './i18n/config';
import axios from "axios";

axios.defaults.headers['x-icode'] = 'A9D80AA716CE595E';

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

