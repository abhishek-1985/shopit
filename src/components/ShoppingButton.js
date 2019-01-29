import React from 'react'
import { ShoppingButtonsContainer, ButtonsContainer, ShoppingButton, FindInStore } from '../style';

export default ({ availableInStore, availableOnline }) => (
    <ShoppingButtonsContainer>
        <ButtonsContainer>
            {availableInStore && <ShoppingButton type='PICKUP'>PICK UP IN STORE </ShoppingButton>}
            {availableOnline && <ShoppingButton type='CART'> ADD TO CART </ShoppingButton>}
        </ButtonsContainer>
        {availableInStore && (
            <FindInStore href="#">find in a store</FindInStore>
        )}
    </ShoppingButtonsContainer>
)
