interface LanguageProps {
    language: 'zh' | 'en',
    languageList: { name: string, code: string }[]
}

const defaultLanguage: LanguageProps = {
    language: 'zh',
    languageList: [{name: '中文', code: 'zh'}, {name: '英文', code: 'en'}]
}


const LanguageReducer = (state = defaultLanguage, action) => {
    return state
}

export default LanguageReducer
