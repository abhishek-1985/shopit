import { Reducer, Selector } from 'redux-testkit';
import SagaTester from 'redux-saga-tester';
import itemReducer, 
    {  
        getItemImages, 
        getItemPrice, 
        getItemAvaibilility, 
        getItemPromotions,
        getReturnPolicy, 
        getItemDetails,
        requestSucceeded,
    getItemData,
    REQUEST_SUCCEEDED,
    } from './item';

describe('Item reducer tests', () => {
    it('it populates item state in redux store with correct payload', () => {
        const action = requestSucceeded(
            {
                DPCI: 'test-xxx'
            }
        );
        const expectedState = {
                DPCI: "test-xxx"
        };
        Reducer(itemReducer)
            .withState({})
            .expect(action)
            .toReturnState(expectedState);
    });
});

describe('Item Selector tests', () => {
    it('should return Item Details', () => {
        const testState = {
            item : {
                DPCI: 'test-xxx',
                title: 'test product',
                shortDescription: 'test description',
                ItemDescription: [
                    {
                        features: ['<strong>Item feature 1</strong>']
                    }
                ]
            }
        };
        const expected = {
            highlights: ['Item feature 1'],
            title: 'test product',
            shortDescription: 'test description'
        };
        Selector(getItemDetails)
        .expect(testState)
        .toReturn(expected);
    });
    it('should return primary and alternate images in an array', () => {
        const testState = {
            item: {
                DPCI: 'test-xxx',
                Images: [
                    {
                        AlternateImages: [
                            {
                                image: 'http://test_alt'
                            }
                        ],
                        PrimaryImage: [
                            {
                                image: 'https://test_primary'
                            }
                        ]
                    }
                ]
            }
        };
        const expected = [
            {
                image: 'https://test_primary'
            },
            {
                image: 'http://test_alt'
            }
        ];

        Selector(getItemImages)
            .expect(testState)
            .toReturn(expected);
    });
    it('should return item price', () => {
        const testState = {
            item: {
                DPCI: 'test-xxx',
                Offers: [
                    {
                        OfferPrice: [
                            {
                                formattedPriceValue: '$1',
                                priceQualifier: 'online only'
                            }
                        ]
                    }
                ]
            }
        };
        const expected = {
            formattedPriceValue: '$1',
            priceQualifier: 'online only'
        };
        Selector(getItemPrice)
            .expect(testState)
            .toReturn(expected);
    });
    it('should return item avaibility as availableOnline as true and availableInStore as false', () => {
        const testState = {
            item: {
                DPCI: 'test-xxx',
                purchasingChannelCode: '1'
            }
        };
        const expected = {
            availableOnline: true,
            availableInStore: false
        };
        Selector(getItemAvaibilility)
            .expect(testState)
            .toReturn(expected);
    });
    it('should return item avaibility as availableOnline as false and availableInStore as true', () => {
        const testState = {
            item: {
                DPCI: 'test-xxx',
                purchasingChannelCode: '2'
            }
        };
        const expected = {
            availableOnline: false,
            availableInStore: true
        };
        Selector(getItemAvaibilility)
            .expect(testState)
            .toReturn(expected);
    });
    it('should return item avaibility as availableOnline and availableInStore as true', () => {
        const testState = {
            item: {
                DPCI: 'test-xxx',
                purchasingChannelCode: '0'
            }
        };
        const expected = {
            availableOnline: true,
            availableInStore: true
        };
        Selector(getItemAvaibilility)
            .expect(testState)
            .toReturn(expected);
    });
    it('should return item promotions', () => {
        const testState = {
            item: {
                DPCI: 'test-xxx',
                Promotions: []
            }
        };
        const expected = [];
        Selector(getItemPromotions)
            .expect(testState)
            .toReturn(expected);
    });
    it('should return Return Policy Legal Copy', () => {
        const testState = {
            item: {
                DPCI: 'test-xxx',
                ReturnPolicy: [
                    {
                        legalCopy: '<p>Return Policy Details</p>'
                    }
                ]
            }
        };
        const expected = 'Return Policy Details';
        Selector(getReturnPolicy)
            .expect(testState)
            .toReturn(expected);
    });
});
describe('Sagas tests', () => {
    const testState = {};
    let sagaTester;
    beforeEach(() => {
        sagaTester = new SagaTester({
            initialState: testState,
            reducers: {
                item: itemReducer
            }
        });
    });
    //TODO:- Couldn't get the saga testing to work with mocking API call .Need to look at it later.

    xit('should fetch item data successfully', async() => {
        jest.resetModules();
        jest.mock('../util/request', () =>
            jest.fn(() =>
                Promise.resolve({
                    CatalogEntryView: [
                        {
                            DPCI: 'test-xxx'
                        }
                    ]
                })
            )
        );
        require('../util/request');
        const getItemDataSaga = require('./item').getItemDataSaga;
        sagaTester.start(getItemDataSaga);
        sagaTester.dispatch(getItemData());
        await sagaTester.waitFor(REQUEST_SUCCEEDED);
        expect(sagaTester.getLatestCalledAction().response).toEqual(
             {
                DPCI: 'test-xxx'
            }
        );
    });
});