import React, {useState} from 'react'
import {Layout, Typography, Input, Dropdown, Button, Menu} from 'antd'
import {GlobalOutlined} from '@ant-design/icons'
import styles from './index.module.css'
import logo from '../../assets/logo.svg'
import {useNavigate} from "react-router-dom";
import store from '../../redux/store';
import {LanguageProps} from '../../redux/languageReducer';
import {AddModal} from "./addModal";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

interface State extends LanguageProps {
}

export const Header: React.FC = () => {
    const navigate = useNavigate()
    const state: State = store.getState();
    // const [language, setLanguage] = useState(state.language)
    // const [languageList, setLanguageList] = useState(state.languageList)
    const [addModalVisible, setAddModalVisible] = useState(false)
    const {t} = useTranslation()
    const language = useSelector((state: State) => state.language);
    const languageList = useSelector((state: State) => state.languageList);
    const dispatch = useDispatch();
    // store.subscribe(() => {
    //     setLanguage(store.getState().language)
    //     setLanguageList(store.getState().languageList)
    // })

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
            dispatch({
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
                            {t('header.slogan')}
                        </Typography.Text>
                        <Dropdown.Button
                            style={{marginLeft: 15}}
                            overlay={
                                <Menu onClick={handleMenuClick}>
                                    {languageList.map(l => {
                                        return (<Menu.Item key={l.code}>{l.name}</Menu.Item>)
                                    })}
                                    <Menu.Item key='new'>{t('header.add_new_language')}</Menu.Item>
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
                            }}>{t('header.register')}</Button>
                            <Button onClick={() => {
                                navigate('/login')
                            }}>{t('header.signIn')}</Button>
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
                    <Menu.Item key='1'>{t('header.home_page')}</Menu.Item>
                    <Menu.Item key='2'>{t('header.weekend')}</Menu.Item>
                    <Menu.Item key='3'>{t('header.group')}</Menu.Item>
                    <Menu.Item key="4"> {t('header.backpack')} </Menu.Item>
                    <Menu.Item key="5"> {t('header.private')} </Menu.Item>
                    <Menu.Item key="6"> {t('header.cruise')} </Menu.Item>
                    <Menu.Item key="7"> {t('header.hotel')} </Menu.Item>
                    <Menu.Item key="8"> {t('header.local')} </Menu.Item>
                    <Menu.Item key="9"> {t('header.theme')} </Menu.Item>
                    <Menu.Item key="10"> {t('header.custom')} </Menu.Item>
                    <Menu.Item key="11"> {t('header.study')} </Menu.Item>
                    <Menu.Item key="12"> {t('header.visa')} </Menu.Item>
                    <Menu.Item key="13"> {t('header.enterprise')} </Menu.Item>
                    <Menu.Item key="14"> {t('header.high_end')} </Menu.Item>
                    <Menu.Item key="15"> {t('header.outdoor')} </Menu.Item>
                    <Menu.Item key="16"> {t('header.insurance')} </Menu.Item>
                </Menu>
            </div>
        </>
    )
}
