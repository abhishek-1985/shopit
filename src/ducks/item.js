import { createSelector } from 'reselect';
import { call, put, takeEvery } from 'redux-saga/effects';
import request from '../util/request';

export const GET_ITEM_DATA = 'item/GET_ITEM_DATA';
export const REQUEST_SUCCEEDED = 'item/REQUEST_SUCCEEDED';

export const initialState = {};

export function getItemData() {
    return {
        type: GET_ITEM_DATA
    }
}

export function requestSucceeded(payload) {
    return {
        type: REQUEST_SUCCEEDED,
        payload
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REQUEST_SUCCEEDED:
            return {
                ...payload
            }
        default:
            return state;
    }
}

export const getItem = ({item}) => item;

export const getItemDetails = createSelector(
    [getItem],(itemState) => {
        if (!Object.keys(itemState).length) {
            return {};
        }
        const { ItemDescription, title, shortDescription } = itemState;
        const { features } = ItemDescription[0];
        const htmlStripedHighlights = features.map(each => {
            const fragment = new DOMParser().parseFromString(each, 'text/html')
            return fragment.body.textContent || ''
        })
        return {          
            highlights: htmlStripedHighlights,
            title,
            shortDescription
        } 
});

export const getItemImages = createSelector(
    [getItem],(itemState) => {
        if(!Object.keys(itemState).length) {
            return [];
        }
        const imageArray = itemState.Images;
        const { AlternateImages, PrimaryImage } = imageArray[0];
        return [...PrimaryImage, ...AlternateImages];
    }
);

export const getItemPrice = createSelector([getItem],(itemState) => {
    if (!Object.keys(itemState).length) {
        return {};
    }
    const offer=itemState.Offers[0];
    return {
        formattedPriceValue: offer.OfferPrice[0].formattedPriceValue,
        priceQualifier: offer.OfferPrice[0].priceQualifier 
    }
})

export const getItemAvaibilility = createSelector([getItem], (itemState) => {
    if (!Object.keys(itemState).length) {
        return {};
    }
    const purchasingCodeInt = parseInt(itemState.purchasingChannelCode, 10)
    return {
        availableOnline: purchasingCodeInt === 1 || purchasingCodeInt === 0,
        availableInStore: purchasingCodeInt === 2 || purchasingCodeInt === 0
    }
});

export const getItemPromotions = createSelector([getItem], (itemState) => {
    if (!Object.keys(itemState).length) {
        return [];
    }
     return itemState.Promotions  ;  
});

export const getReturnPolicy = createSelector([getItem], (itemState) => {
    if (!Object.keys(itemState).length) {
        return {};
    }
    const { legalCopy } = itemState.ReturnPolicy[0];
    const fragment = new DOMParser().parseFromString(legalCopy, 'text/html');
    const htmlElement = `${fragment.body.querySelector('p').innerHTML}`;
    return htmlElement ;
});

export const getReviewRatings = createSelector([getItem],(itemState) => {
    if (!Object.keys(itemState).length) {
        return {};
    }
    const { Con, Pro, consolidatedOverallRating, totalReviews } = itemState.CustomerReview[0];
    return {
        con: { ...Con[0], overallRating: parseInt(Con[0].overallRating, 10)},
        pro: { ...Pro[0], overallRating: parseInt(Pro[0].overallRating, 10)},
        consolidatedOverallRating: parseInt(consolidatedOverallRating,10),
        totalReviews: parseInt(totalReviews,10)
    }
});

export function* getItemDataSaga() {
    yield takeEvery(GET_ITEM_DATA, getItemDataWorker);
}

export function* getItemDataWorker() {
    const url = 'http://localhost:8080/item/v1';
    try{
        const response = yield call(request, url);
        const stripResponse = response.CatalogEntryView[0];
        yield put(requestSucceeded(stripResponse));
    }
    catch(ex){
        console.error('Exception occured in fetching item data :- ', ex);
    }
}

export const sagas = [getItemDataSaga];

