import React from 'react';
import {useLocation, useMatch, useParams} from "react-router-dom";

export const Details: React.FC = ({}) => {
    const location = useLocation()
    const params = useParams()
    console.log('params======>', params);

    return (
        <>
            <h1>详情页面id= {params.id}</h1>
        </>
    )
}
