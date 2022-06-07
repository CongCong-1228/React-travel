import {
    FETCH_RECOMMEND_PRODUCTS_FAIL,
    FETCH_RECOMMEND_PRODUCTS_START,
    FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    FetchRecommendProductAction
} from './productionActions';


interface productionState {
    productionList: any[],
    loading: boolean,
    error: string | null,
}

const defaultState: productionState = {
    productionList: [],
    loading: true,
    error: null,
}

const productionReducer = (state = defaultState, action: FetchRecommendProductAction) => {
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCTS_START:
            return {...state, loading: true}
        case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return {...state, loading: false, productionList: action.payload}
        case FETCH_RECOMMEND_PRODUCTS_FAIL:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export default productionReducer;
