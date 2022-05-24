import React, {useState} from 'react';
import {use} from "i18next";

// const HandleOnChange = (e: any): any => {
//     const [state, setState] = useState('')
//     setState(e.target.value);
// }
//
// export default HandleOnChange;


export default function useOnChange(e) {
    const [state, setState] = useState('')
    setState(e.target.value);
}
