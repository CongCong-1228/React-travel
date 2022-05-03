import React from 'react';
import styles from './App.module.css';
import {Header, Footer, SideMenu, Carousel, ProductList, BusinessPartners} from './components'
import {Row, Col, Typography} from 'antd'
import {productList1, productList2, productList3} from './mock'
import sider1 from './assets/images/sider_2019_12-09.png'
import sider2 from './assets/images/sider_2019_02-04-2.png'
import sider3 from './assets/images/sider_2019_02-04.png'

function App() {

    return (
        <div className={styles.App}>
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
                    title={<Typography.Title type='warning' level={3}>爆款推荐</Typography.Title>}
                    silderImage={sider1}
                    productions={productList1}
                />
                <ProductList
                    title={<Typography.Title type='danger' level={3}>新品上市</Typography.Title>}
                    silderImage={sider2}
                    productions={productList2}
                />
                <ProductList
                    title={<Typography.Title type='success' level={3}>国内游推荐</Typography.Title>}
                    silderImage={sider3}
                    productions={productList3}
                />

            </div>
            <BusinessPartners />
            <Footer/>
        </div>
    );
}

export default App;
