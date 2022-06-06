import React from 'react'
import styles from './index.module.css'
import {Header, Footer, SideMenu, Carousel, ProductList, BusinessPartners} from '../../components'
import {Row, Col, Typography, Spin} from 'antd'
// import {productList1, productList2, productList3} from '../../mock'
import slider1 from '../../assets/images/sider_2019_12-09.png'
import slider2 from '../../assets/images/sider_2019_02-04-2.png'
import slider3 from '../../assets/images/sider_2019_02-04.png'
import {withTranslation, WithTranslation} from "react-i18next";
import {connect} from "react-redux";
import axios from "axios";

interface State {
    productList: any[],
    loading: boolean,
    error: string | null,
}


class HomePage extends React.Component<WithTranslation, State> {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            loading: true,
            error: null,
        }
    }

    getData = async () => {
        try {
            const response = await axios.get('http://123.56.149.216:8080/api/productCollections')
            this.setState({
                productList: response.data,
                loading: false,
            })
        } catch (error: any) {
            this.setState({
                error: error.message,
                loading: false
            })
        }

    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const {t} = this.props
        const {productList, loading, error} = this.state
        if (loading) {
            return (
                <Spin size="large"
                      style={{
                          height: '100vh',
                          // width: 200,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                      }}/>
            )
        }

        if (error) {
            return <span>{error}</span>
        }

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
                        productions={productList[0].touristRoutes}
                    />
                    <ProductList
                        title={<Typography.Title type='danger'
                                                 level={3}>{t("home_page.new_arrival")}</Typography.Title>}
                        sliderImage={slider2}
                        productions={productList[1].touristRoutes}
                    />
                    <ProductList
                        title={<Typography.Title type='success'
                                                 level={3}>{t("home_page.domestic_travel")}</Typography.Title>}
                        sliderImage={slider3}
                        productions={productList[2].touristRoutes}
                    />

                </div>
                <BusinessPartners/>
                <Footer/>
            </>
        )
    }
}

export const Home = withTranslation()(HomePage)
