import React from 'react'
import styles from './index.module.css'
import {Header, Footer, SideMenu, Carousel, ProductList, BusinessPartners} from '../../components'
import {Row, Col, Typography} from 'antd'
import {productList1, productList2, productList3} from '../../mock'
import slider1 from '../../assets/images/sider_2019_12-09.png'
import slider2 from '../../assets/images/sider_2019_02-04-2.png'
import slider3 from '../../assets/images/sider_2019_02-04.png'
import {withTranslation, WithTranslation} from "react-i18next";
import {connect} from "react-redux";

class HomePage extends React.Component<WithTranslation> {
    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props
        return (
            <>
                <Header/>
                <div className={styles.pageContent}>
                    <Row style={{marginTop: '20px'}}>
                        <Col span={6}>
                            <SideMenu/>
                        </Col>
                        <Col span={18}>
                            <Carousel/>
                        </Col>
                    </Row>
                    <ProductList
                        title={<Typography.Title type='warning'
                                                 level={3}>{t("home_page.hot_recommended")}</Typography.Title>}
                        sliderImage={slider1}
                        productions={productList1}
                    />
                    <ProductList
                        title={<Typography.Title type='danger' level={3}>{t("home_page.new_arrival")}</Typography.Title>}
                        sliderImage={slider2}
                        productions={productList2}
                    />
                    <ProductList
                        title={<Typography.Title type='success' level={3}>{t("home_page.domestic_travel")}</Typography.Title>}
                        sliderImage={slider3}
                        productions={productList3}
                    />

                </div>
                <BusinessPartners/>
                <Footer/>
            </>
        )
    }
}

export const Home = withTranslation()(HomePage)
