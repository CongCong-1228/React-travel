import i18n from "i18next";

export interface LanguageProps {
    language: 'zh' | 'en',
    languageList: { name: string, code: string }[]
}

const defaultLanguage: LanguageProps = {
    language: 'zh',
    languageList: [{name: '中文', code: 'zh'}, {name: '英文', code: 'en'}]
}


const LanguageReducer = (state = defaultLanguage, action) => {
    switch (action.type) {
        case 'language_change':
            i18n.changeLanguage(action.payload.language).then()
            return {...state, language: action.payload.language}
        case 'language_add':
            return {
                ...state,
                languageList: [...state.languageList, {name: action.payload.language, code: action.payload.code}]
            }
        default:
            return {...state}
    }
}

export default LanguageReducer
