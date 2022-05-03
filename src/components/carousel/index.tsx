import React from 'react'
import styles from './index.module.css'
import {Carousel as AntdCarousel, Image} from 'antd'

import CarouselImage1 from '../../assets/images/carousel_1.jpg'
import CarouselImage2 from '../../assets/images/carousel_2.jpg'
import CarouselImage3 from '../../assets/images/carousel_3.jpg'

export const Carousel: React.FC = () => {
    return (
        <>
            <AntdCarousel autoplay className={styles.carouse}>
                <Image src={CarouselImage1}></Image>
                <Image src={CarouselImage2}></Image>
                <Image src={CarouselImage3}></Image>
            </AntdCarousel>
        </>
    )
}