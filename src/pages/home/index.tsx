import React from 'react'
import styles from './index.module.css'
import {BusinessPartners, Carousel, Footer, Header, ProductList, SideMenu} from '../../components'
import {Col, Row, Spin, Typography} from 'antd'
// import {productList1, productList2, productList3} from '../../mock'
import slider1 from '../../assets/images/sider_2019_12-09.png'
import slider2 from '../../assets/images/sider_2019_02-04-2.png'
import slider3 from '../../assets/images/sider_2019_02-04.png'
import {withTranslation, WithTranslation} from "react-i18next";
import {connect} from "react-redux";
import {giveMeDataActionCreator} from "../../redux/production/productionActions";


const mapStateToProps = (state) => {
    return {
        loading: state.production.loading,
        error: state.production.error,
        productionList: state.production.productionList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        giveMeData: () => {
            dispatch(giveMeDataActionCreator())
        }
    }
}

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>


class HomePage extends React.Component<PropsType> {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.giveMeData();
    }

    render() {
        const {t, productionList, loading, error} = this.props
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
                        productions={productionList[0].touristRoutes}
                    />
                    <ProductList
                        title={<Typography.Title type='danger'
                                                 level={3}>{t("home_page.new_arrival")}</Typography.Title>}
                        sliderImage={slider2}
                        productions={productionList[1].touristRoutes}
                    />
                    <ProductList
                        title={<Typography.Title type='success'
                                                 level={3}>{t("home_page.domestic_travel")}</Typography.Title>}
                        sliderImage={slider3}
                        productions={productionList[2].touristRoutes}
                    />

                </div>
                <BusinessPartners/>
                <Footer/>
            </>
        )
    }
}


export const Home = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePage))
