import React, {Dispatch, SetStateAction, useState} from 'react';
import {Modal} from 'antd';
import {useDispatch, useSelector, useStore} from 'react-redux';


interface addModalProps {
    addModalVisible: boolean,
    setAddModalVisible: Dispatch<SetStateAction<boolean>>,
}

export const AddModal: React.FC<addModalProps> = ({addModalVisible, setAddModalVisible}) => {
    const [inputStringValue, setInputStringValue] = useState('')
    const [inputCodeValue, setInputCodeValue] = useState('')
    const dispatch = useDispatch()


    const handleStringOnChange = (e) => {
        setInputStringValue(e.target.value)
    }
    const handleCodeOnChange = (e) => {
        setInputCodeValue(e.target.value)
    }

    const handleOk = (inputStringValue, inputCodeValue) => {
        dispatch({
            type: 'language_add',
            payload: {
                language: inputStringValue,
                code: inputCodeValue
            }
        })
        setAddModalVisible(false)
    }
    const handleCancel = () => {
        setAddModalVisible(false)
    }

    return (
        <Modal title='请输入要加入的新语言类型'
               visible={addModalVisible}
               onOk={() => handleOk(inputStringValue, inputCodeValue)}
               onCancel={handleCancel}>
            <span>String</span><input type="text" onChange={handleStringOnChange}/>
            <span>Code</span><input type="text" onChange={handleCodeOnChange}/>
        </Modal>
    )
}



