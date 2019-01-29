import React from 'react'
import { QuantityContainer, QuantityLabel } from '../../style';
import QuantityControl from './QuantityControl';

class Quantity extends React.Component {
    state = {
        quantity: 0
    }
    decrement = () => {
        const { quantity } = this.state
        this.setState({ quantity: (quantity-1) > 0 ? quantity-1 : 0 })
    }
    increment = () => {
        const { quantity } = this.state
        this.setState({ quantity: quantity + 1 })
    }
    render() {
        const { quantity } = this.state
        return (
            <QuantityContainer>
                <QuantityLabel>quantity:</QuantityLabel>
                <QuantityControl
                    decrement={this.decrement}
                    increment={this.increment}
                    quantity={quantity}
                />
            </QuantityContainer>
        )
    }
}

export default Quantity
