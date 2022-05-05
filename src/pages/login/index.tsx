import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import styles from './index.module.css'

export const Login = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <h1>登录页面</h1>
        </>
    )
}