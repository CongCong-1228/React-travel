import {sideMenuList} from './mock'
import React from 'react'
import {Menu} from 'antd'
import {GifOutlined} from '@ant-design/icons'
import styles from './index.module.css'

export const SideMenu: React.FC = () => {
    return (
        <>
            <Menu mode='vertical' className={styles.sideMenu}>
                {sideMenuList.map((m, index) => (
                    <Menu.SubMenu key={'side-menu' + index} title={<><GifOutlined/><span>{m.title}</span></>}>
                        {m.subMenu.map((sm, index) => (
                            <Menu.SubMenu key={'sub-menu' + index} title={<><GifOutlined/><span>{sm.title}</span></>}>
                                {sm.subMenu.map((sms, index) => (
                                    <Menu.Item key={'menu-item' + index}>
                                        {sms}
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ))}
                    </Menu.SubMenu>
                ))}
            </Menu>
        </>
    )
}