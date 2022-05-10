import React from 'react';
import styles from './App.module.css';
import {Home, Login, Register, Details} from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/products/:id' element={<Details/>}/>
                    <Route path='*' element={<h1>404 not found!</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
