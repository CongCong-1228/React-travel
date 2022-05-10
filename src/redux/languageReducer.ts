export interface LanguageProps {
    language: 'zh' | 'en',
    languageList: { name: string, code: string }[]
}

const defaultLanguage: LanguageProps = {
    language: 'zh',
    languageList: [{name: '中文', code: 'zh'}, {name: '英文', code: 'en'}]
}


const LanguageReducer = (state = defaultLanguage, action) => {
    if (action.type === 'language_change') {
        return {...state, language: action.payload.language}
    }
    if (action.type === 'language_add') {
        return {
            ...state,
            languageList: [...state.languageList, {name: action.payload.language, code: action.payload.code}]
        }
    }
    return state
}

export default LanguageReducer
