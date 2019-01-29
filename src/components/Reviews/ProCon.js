import React from 'react'
import { ProConContainer, ProConRow, ProConColumn, ProConText } from '../../style'
import Review from './Review';

export default ({ con, pro }) => {
    return (
        <ProConContainer>
            <ProConRow>
                <ProConColumn>
                    <div>PRO</div>
                    <ProConText>most helpful 4-5 star review</ProConText>
                </ProConColumn>
                <ProConColumn>
                    <div>CON</div>
                    <ProConText>most helpful 1-2 star review</ProConText>
                </ProConColumn>
            </ProConRow>
            <ProConRow>
                <ProConColumn>
                    <Review {...pro} />
                </ProConColumn>
                <ProConColumn>
                    <Review {...con} />
                </ProConColumn>
            </ProConRow>
        </ProConContainer>
    )
}
