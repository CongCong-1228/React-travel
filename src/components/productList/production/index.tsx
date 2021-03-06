import React from 'react'
import {Image, Typography} from 'antd'
import {useNavigate} from "react-router-dom";

interface PropsType {
    title: string,
    id: string | number,
    price: string | number,
    image: string,
    size: 'large' | 'normal'

}


export const Production: React.FC<PropsType> = ({title, id, price, image, size}) => {
    const navigate = useNavigate()
    return (
        <div style={{height: '100%', width: '100%', padding: '8px'}} onClick={() => {
            navigate(`/products/${id}`)
        }}>
            {size === 'large' ? <Image src={image} height={450}/> :
                <Image src={image}/>}
            <div>
                <Typography.Text type='secondary'>{title.slice(0, 25)}</Typography.Text>
                <Typography.Text type='danger' strong>{`￥${price} 起`}</Typography.Text>
            </div>
        </div>
    )
}
