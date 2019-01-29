import React from 'react';
import { mount } from 'enzyme';

import Quantity from './index';

const renderMountPage = props => {
    return mount(<Quantity {...props} />);
}

describe('Quantity unit tests', () => {
    it('should render the Quantity component', () => {
        const page = renderMountPage();
        expect(page).toBeTruthy();
    });
    it('should increment quantity to 1 when the + button is clicked once', () => {
        const page = renderMountPage();
        page.find('QuantityControl')
            .find({ 'data-cy': 'increment-quantity' })
            .at(2)
            .simulate('click');
        const expected = page.find('QuantityControl')
            .find({ 'data-cy': 'item-quantity' })
            .at(2);
        expect(expected.text()).toBe('1');

    });
    it('should decrement quantity to 0 when the + button is clicked once and then decreement button is clicked', () => {
        const page = renderMountPage();
        page.find('QuantityControl')
            .find({ 'data-cy': 'increment-quantity' })
            .at(2)
            .simulate('click');

        page.find('QuantityControl')
            .find({ 'data-cy': 'decrement-quantity' })
            .at(2)
            .simulate('click');

        const expected = page.find('QuantityControl')
            .find({ 'data-cy': 'item-quantity' })
            .at(2);

        expect(expected.text()).toBe('0');

    });
    it('should not decrement quantity below 0 when decrement button is clicked with quantity already at 0 ', () => {
        const page = renderMountPage();

        page.find('QuantityControl')
            .find({ 'data-cy': 'decrement-quantity' })
            .at(2)
            .simulate('click');

        const expected = page.find('QuantityControl')
            .find({ 'data-cy': 'item-quantity' })
            .at(2);

        expect(expected.text()).toBe('0');

    });

});