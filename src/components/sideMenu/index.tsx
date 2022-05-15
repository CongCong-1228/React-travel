import {sideMenuList} from './mock'
import React from 'react'
import {Menu} from 'antd'
import {GifOutlined} from '@ant-design/icons'
import styles from './index.module.css'


export class SideMenu extends React.Component {
    render() {
        return (
            <>
                <Menu mode='vertical' className={styles.sideMenu}>
                    {sideMenuList.map((m, index) => (
                        <Menu.SubMenu key={`side-Menu${index}`} title={<><GifOutlined/><span>{m.title}</span></>}>
                            {m.subMenu.map((sm, index1) => (
                                <Menu.SubMenu key={`side-Menu${index}-side-Menu2${index1}`}
                                              title={<><GifOutlined/><span>{sm.title}</span></>}>
                                    {sm.subMenu.map((sms, index2) => (
                                        <Menu.Item key={`side-Menu${index}-side-Menu2${index1}-side-Menu3${index2}`}>
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
}


