import React, {useTransition} from 'react'
import {Divider} from 'antd'
import styles from './index.module.css'
import facebook from '../../assets/images/facebook-807588_640.png'
import microsoft from '../../assets/images/microsoft-80658_640.png'
import youtube from '../../assets/images/icon-720944_640.png'
import flollow from '../../assets/images/follow-826033_640.png'
import {useTranslation} from "react-i18next";

export const BusinessPartners: React.FC = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className={styles.partners}>
                <Divider orientation='left'>
                    <h3 style={{fontWeight: 900}}>{t('home_page.joint_venture')}</h3>
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
