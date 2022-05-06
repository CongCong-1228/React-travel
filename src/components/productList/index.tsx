import React from 'react'
import {Divider, Row, Col, Image} from 'antd'
import styles from './index.module.css'
import {Production} from './production'

interface PropsType {
    title: JSX.Element // JSX元素
    sliderImage: string
    productions: { id: string | number, title: string, price: string | number, touristRoutePictures: { url: string }[] }[]
}

export const ProductList: React.FC<PropsType> = ({title, sliderImage, productions}) => {
    return (
        <div className={styles.content}>
            <Divider orientation='left'>
                {title}
            </Divider>
            <Row>
                <Col span={4}>
                    <Image src={sliderImage} className={styles.sideImage} height={720}/>
                    {/*<img src={silderImage} alt=""/>*/}
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={12}>
                            <Production
                                title={productions[0].title}
                                id={productions[0].id}
                                price={productions[0].price}
                                image={productions[0].touristRoutePictures[0].url}
                                size='large'
                            />
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={12}> <Production
                                    title={productions[1].title}
                                    id={productions[1].id}
                                    price={productions[1].price}
                                    image={productions[1].touristRoutePictures[0].url}
                                    size='normal'
                                />
                                </Col>
                                <Col span={12}> <Production
                                    title={productions[2].title}
                                    id={productions[2].id}
                                    price={productions[2].price}
                                    image={productions[2].touristRoutePictures[0].url}
                                    size='normal'
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}> <Production
                                    title={productions[3].title}
                                    id={productions[3].id}
                                    price={productions[3].price}
                                    image={productions[3].touristRoutePictures[0].url}
                                    size='normal'
                                />
                                </Col>
                                <Col span={12}> <Production
                                    title={productions[4].title}
                                    id={productions[4].id}
                                    price={productions[4].price}
                                    image={productions[4].touristRoutePictures[0].url}
                                    size='normal'
                                />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Production
                                title={productions[5].title}
                                id={productions[5].id}
                                price={productions[5].price}
                                image={productions[5].touristRoutePictures[0].url}
                                size='normal'
                            />
                        </Col>
                        <Col span={6}>
                            <Production
                                title={productions[6].title}
                                id={productions[6].id}
                                price={productions[6].price}
                                image={productions[6].touristRoutePictures[0].url}
                                size='normal'
                            />
                        </Col>
                        <Col span={6}>
                            <Production
                                title={productions[7].title}
                                id={productions[7].id}
                                price={productions[7].price}
                                image={productions[7].touristRoutePictures[0].url}
                                size='normal'
                            />
                        </Col>
                        <Col span={6}>
                            <Production
                                title={productions[8].title}
                                id={productions[8].id}
                                price={productions[8].price}
                                image={productions[8].touristRoutePictures[0].url}
                                size='normal'
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}
