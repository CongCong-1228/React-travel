import React, {useState} from 'react'
import {Layout, Typography, Input, Dropdown, Button, Menu} from 'antd'
import {GlobalOutlined} from '@ant-design/icons'
import styles from './index.module.css'
import logo from '../../assets/logo.svg'
import {useNavigate} from "react-router-dom";
import store from '../../redux/store';
import {LanguageProps} from '../../redux/languageReducer';
import {AddModal} from "./addModal";

interface State extends LanguageProps {
}

export const Header: React.FC = () => {
    const navigate = useNavigate()
    const state: State = store.getState();
    const [language, setLanguage] = useState(state.language)
    const [languageList, setLanguageList] = useState(state.languageList)
    const [addModalVisible, setAddModalVisible] = useState(false)

    store.subscribe(() => {
        setLanguage(store.getState().language)
        setLanguageList(store.getState().languageList)
    })

    const Lang = (language) => {
        switch (language) {
            case 'zh':
                return '中文'
            case 'en':
                return '英文'
            case 'fa':
                return '法文'
            default:
                return '不知名语言'
        }
    }

    const handleMenuClick = (e) => {
        if (e.key === 'new') {
            setAddModalVisible(true)
        } else {
            store.dispatch({
                type: 'language_change',
                payload: {
                    language: e.key
                }
            })
        }
    }
    return (
        <>
            <div className={styles.appHeader}>
                <div className={styles.topHeader}>
                    <div className={styles.inner}>
                        <Typography.Text>
                            让旅游更幸福
                        </Typography.Text>
                        <Dropdown.Button
                            style={{marginLeft: 15}}
                            overlay={
                                <Menu onClick={handleMenuClick}>
                                    {languageList.map(l => {
                                        return (<Menu.Item key={l.code}>{l.name}</Menu.Item>)
                                    })}
                                    <Menu.Item key='new'>添加新语言</Menu.Item>
                                </Menu>}
                            icon={<GlobalOutlined/>}
                        >{
                            Lang(language)
                        }
                        </Dropdown.Button>
                        {addModalVisible &&
                        <AddModal addModalVisible={addModalVisible} setAddModalVisible={setAddModalVisible}/>}
                        <Button.Group className={styles.buttonGroup}>
                            <Button onClick={() => {
                                navigate('/register')
                            }}>注册</Button>
                            <Button onClick={() => {
                                navigate('/login')
                            }}>登录</Button>
                        </Button.Group>
                    </div>
                </div>
                <Layout.Header className={styles.mainHeader}>
                    <img src={logo} alt="" className={styles.appLogo}/>
                    <Typography.Title level={3} className={styles.title}>
                        React 旅游网
                    </Typography.Title>
                    <Input.Search placeholder='请输入旅游目的地、主题、或关键字'
                                  className={styles.searchInput}>
                    </Input.Search>
                </Layout.Header>
                <Menu mode='horizontal' className={styles.mainMenu}>
                    <Menu.Item key='1'>旅游首页</Menu.Item>
                    <Menu.Item key='2'>周末游</Menu.Item>
                    <Menu.Item key='3'>跟团游</Menu.Item>
                    <Menu.Item key="4"> 自由行 </Menu.Item>
                    <Menu.Item key="5"> 私家团 </Menu.Item>
                    <Menu.Item key="6"> 邮轮 </Menu.Item>
                    <Menu.Item key="7"> 酒店+景点 </Menu.Item>
                    <Menu.Item key="8"> 当地玩乐 </Menu.Item>
                    <Menu.Item key="9"> 主题游 </Menu.Item>
                    <Menu.Item key="10"> 定制游 </Menu.Item>
                    <Menu.Item key="11"> 游学 </Menu.Item>
                    <Menu.Item key="12"> 签证 </Menu.Item>
                    <Menu.Item key="13"> 企业游 </Menu.Item>
                    <Menu.Item key="14"> 高端游 </Menu.Item>
                    <Menu.Item key="15"> 爱玩户外 </Menu.Item>
                    <Menu.Item key="16"> 保险 </Menu.Item>
                </Menu>
            </div>
        </>
    )
}
