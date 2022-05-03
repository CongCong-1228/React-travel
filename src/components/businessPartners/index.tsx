import React from 'react'
import {Divider} from 'antd'
import styles from './index.module.css'
import facebook from '../../assets/images/facebook-807588_640.png'
import microsoft from '../../assets/images/microsoft-80658_640.png'
import youtube from '../../assets/images/icon-720944_640.png'
import flollow from '../../assets/images/follow-826033_640.png'

export const BusinessPartners: React.FC = () => {
    return (
        <>
            <div className={styles.partners}>
                <Divider orientation='left'>
                    <h3 style={{fontWeight: 900}}>合作企业</h3>
                </Divider>
                <div className={styles.images}>
                    <img src={microsoft}
                         height={100}
                    />
                    <img src={facebook}
                         height={100}
                    />
                    <img src={youtube}
                         height={100}
                    />
                    <img src={flollow}
                         height={100}
                    />
                </div>
            </div>
        </>
    )
}